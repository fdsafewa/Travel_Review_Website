const PlaceDetails = require('../models/PlaceDetails');
// const User = require('../models/userModel');
// const tf = require('@tensorflow/tfjs-node');
// const use = require('@tensorflow-models/universal-sentence-encoder');
const vader = require('vader-sentiment');
const meta = require('../data/meta.json'); // selected places for recommendation [1 x num_of_place*] will be merged into database for further release
const sigma = require('../data/diagonal.json'); // sigma [1 x num_of_place*] will be merged into database for further release
const Vt = require('../data/concept.json'); // place_to_concept matrix [rank x num_of_place*] will be merged into database for further release
const modelData = require('../data/linear.json'); // linear regression coefficient [1 x dim_of_embedding_vector] will be merged into database for further release

async function getEmbedding(text) {
  const { pipeline } = await import('@xenova/transformers');
  const model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  const embeddings = await model(text, { pooling: 'mean', normalize: true });
  console.log("Output user embedding before toList:", embeddings.tolist()[0].length);
  return embeddings.tolist()[0];
}

const getRecommendations = async (req, res) => {
  const userId = req.body.user_id;
  console.log("Received user_id:", userId);

  try {
    const userRatings = new Array(meta.length).fill(0);
    for (let i = 0; i < meta.length; i++) {
      const place = await PlaceDetails.findById(meta[i]._id);
      console.log(`Traversing meta: ${meta[i]._id}`);
      if (place) {
        const userReview = place.reviews.filter(review => review.userId && review.userId.toString() === userId.toString()).pop();
        if (userReview) {
          userRatings[i] = userReview.rating;
          console.log(`User rating found for _id ${meta[i]._id}: ${userReview.rating}`);
        } else {
          console.log(`No user rating found for _id ${meta[i]._id}, setting to 0`);
        }
      } else {
        console.log(`No place found for _id ${meta[i]._id}, setting rating to 0`);
      }
    }

    console.log("User ratings vector:", userRatings);
    const userVector = userRatings.map((rating, index) => {
      const result = rating * sigma[index];
      console.log(`User rating ${rating} * sigma[${index}] ${sigma[index]} = ${result}`);
      return result;
    });
    console.log("User vector (ratings * sigma):", userVector);

    const scores = Vt.map((placeVector, placeIndex) => {
      const score = placeVector.reduce((sum, value, index) => {
        const result = value * userVector[index];
        console.log(`Vt[${placeIndex}][${index}] ${value} * userVector[${index}] ${userVector[index]} = ${result}`);
        return sum + result;
      }, 0);
      console.log(`Calculated score for place index ${placeIndex}: ${score}`);
      return {
        place_id: meta[placeIndex]._id,
        place_name: meta[placeIndex].place_name,
        score: score
      };
    });

    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, 6);
    console.log("Top scores:", topScores);

    // Log top scores with detailed information
    for (const scoreObj of topScores) {
      const place = await PlaceDetails.findById(scoreObj.place_id);
      if (place) {
        console.log(`Recommended Place ID: ${place._id}`);
        console.log(`Recommended Place Name: ${place.placeName}`);
        console.log(`Recommended Place Address: ${place.address}`);
        console.log(`SVD Calculated Score: ${scoreObj.score}`);
      } else {
        console.log(`Place ID ${scoreObj.place_id} not found in PlaceDetails`);
      }
    }

    res.json(topScores);
  } catch (error) {
    console.error('Error getting recommendations:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getRecommendationPlaces = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("Received user_id:", userId);

    const userRatings = new Array(meta.length).fill(0);
    for (let i = 0; i < meta.length; i++) {
      const place = await PlaceDetails.findById(meta[i]._id);
      console.log(`Traversing meta: ${meta[i]._id}`);
      if (place) {
        const userReview = place.reviews.filter(review => review.userId && review.userId.toString() === userId.toString()).pop();
        if (userReview) {
          userRatings[i] = userReview.rating;
          console.log(`User rating found for _id ${meta[i]._id}: ${userReview.rating}`);
        } else {
          console.log(`No user rating found for _id ${meta[i]._id}, setting to 0`);
        }
      } else {
        console.log(`No place found for _id ${meta[i]._id}, setting rating to 0`);
      }
    }

    console.log("User ratings vector:", userRatings);

    const userVector = userRatings.map((rating, index) => {
      const result = rating * sigma[index];
      console.log(`User rating ${rating} * sigma[${index}] ${sigma[index]} = ${result}`);
      return result;
    });

    console.log("User vector (ratings * sigma):", userVector);

    console.log("userVector shape:", userVector.length);
    console.log("sigma shape:", sigma.length);
    const scores = Vt.map((placeVector, placeIndex) => {
      console.log(`Vt[${placeIndex}] shape:`, placeVector.length);
      const score = placeVector.reduce((sum, value, index) => {
        const result = value * userVector[index];
        console.log(`Vt[${placeIndex}][${index}] ${value} * userVector[${index}] ${userVector[index]} = ${result}`);
        return sum + result;
      }, 0);
      console.log(`Calculated score for place index ${placeIndex}: ${score}`);
      return {
        place_id: meta[placeIndex]._id,
        place_name: meta[placeIndex].place_name,
        score: score
      };
    });

    scores.sort((a, b) => b.score - a.score);
    console.log("Sorted scores:", scores);

    const topScores = scores.slice(0, 6);
    console.log("Top scores:", topScores);

    const placeIds = topScores.map(score => score.place_id);
    console.log("Top place IDs:", placeIds);

    const recommendedPlaces = await PlaceDetails.find({ _id: { $in: placeIds } });

    const placeIdToPlaceMap = recommendedPlaces.reduce((map, place) => {
      map[place._id.toString()] = place;
      return map;
    }, {});

    const sortedRecommendedPlaces = placeIds.map(placeId => placeIdToPlaceMap[placeId]);

    res.json(sortedRecommendedPlaces);
  } catch (error) {
    console.error('Error fetching recommended places:', error);
    res.status(500).json({ message: error.message });
  }
};

const coefficients = modelData.coef_;
const intercept = modelData.intercept_;

function predictRating(features) {
  let score = intercept;
  for (let i = 0; i < features.length; i++) {
    score += coefficients[i] * features[i];
  }
  return score;
}

const predictRatingHandler = async (req, res) => {
  const { comment, user_id } = req.body;
  console.log("Received POST /recommendation/predict-rating with user_id:", user_id);
  console.log("Received comment:", comment);

  if (!comment) {
    console.log("Invalid comment received.");
    return res.status(400).send('Invalid comment');
  }

  try {
    const features = await getEmbedding(comment);
    console.log("Features for rating prediction:", features);
    const rating = predictRating(features);
    console.log("Predicted rating:", rating);
    res.json({ rating });
  } catch (error) {
    console.error('Error getting embedding:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getRecommendations,
  getRecommendationPlaces,
  predictRatingHandler
};
