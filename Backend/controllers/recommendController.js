const PlaceDetails = require('../models/PlaceDetails');
const User = require('../models/userModel');
const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const vader = require('vader-sentiment');


// async function getEmbedding(text) {
//   const model = await use.load();
//   const embeddings = await model.embed([text]);
//   return embeddings.arraySync()[0];
// }

async function getEmbedding(text) {
  const { pipeline } = await import('@xenova/transformers');
  const model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  const embeddings = await model(text, { pooling: 'mean', normalize: true });
  console.log("output userembedding before tolist", embeddings.tolist()[0].length);
  return embeddings.tolist()[0];
}

async function getAverageEmbeddings() {
  const places = await PlaceDetails.find({});
  return places.map(place => ({
    place_id: place._id,
    place_name: place.placeName,
    average_embedding: place.new_average_embedding
  }));
}

const getRecommendations = async (req, res) => {
  const userInput = req.body.comment;
  const userId = req.body.user_id; 
  console.log("received", userInput)

  if (!userInput) {
    return res.status(400).send('Invalid user input');
  }

  try {
    const userEmbedding = await getEmbedding(userInput);
    console.log("output userembedding", userEmbedding);
    const sentimentScore = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    console.log("output score", sentimentScore);
    
    const places = await getAverageEmbeddings();
    const scores = places.map(place => {
      if (!place.average_embedding || !Array.isArray(place.average_embedding) || place.average_embedding.length !== 384) {
        console.error(`Place ${place.place_name} has invalid average_embedding`);
        return { place_id: place.place_id, place_name: place.place_name, score: -Infinity };
      }

      const dotProduct = userEmbedding.reduce((sum, value, index) => sum + value * place.average_embedding[index], 0);
      return { place_id: place.place_id, place_name: place.place_name, score: dotProduct };
    });

    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, 6);

    await User.findByIdAndUpdate(userId, { recommendations: topScores });

    console.log('Recommendation request processed successfully');
    res.json(topScores);
  } catch (error) {
    console.error('Error getting recommendations:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getRecommendationPlaces = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get the place IDs from user recommendations
    const placeIds = user.recommendations.map(rec => rec.place_id);
    console.log(placeIds)
    
    // Fetch the recommended places from the database
    const recommendedPlaces = await PlaceDetails.find({ _id: { $in: placeIds } });

    // Sort the recommended places according to the order of placeIds
    const placeIdToPlaceMap = recommendedPlaces.reduce((map, place) => {
      map[place._id.toString()] = place;
      return map;
    }, {});

    const sortedRecommendedPlaces = placeIds.map(placeId => placeIdToPlaceMap[placeId]);

    res.json(sortedRecommendedPlaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    }

module.exports = {
  getRecommendations,
  getRecommendationPlaces,

};
