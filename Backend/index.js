require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const PlaceDetails = require('./models/PlaceDetails'); // Ensure this path is correct
const placeDetailsRoutes = require('./routes/placeDetails');
const FormDataModel = require ('./models/FormData');

const app = express();

// MongoDB connection string with the database name specified
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://vicky:ZWI5s1lm6fcox8UH@cluster0.moyyczg.mongodb.net/TravelReview?retryWrites=true&w=majority';
const mapToTags = (tags, description) => {
  const tagMapping = {
    nature: ['park', 'natural_feature', 'lagoon', 'wildlife', 'beach'],
    cultural: ['museum', 'art_gallery', 'cultural_center', 'historic', 'monument', 'landmark', 'totem'],
    recreational: ['recreation', 'path', 'hiking', 'scenic', 'trails'],
    family: ['family_friendly', 'kids', 'aquarium', 'interactive', 'science', 'aviary'],
    landmark: ['tower', 'clock', 'iconic', 'rock', 'landmark'],
    commercial: ['shopping_mall', 'store', 'market', 'restaurant', 'cafe', 'bar', 'night_club', 'complex'],
    popular: ['popular', 'tourist_attraction', 'point_of_interest', 'establishment'],
  };

  const descriptionMapping = {
    nature: ['lagoon', 'fountain', 'wildlife', 'park', 'flowers', 'garden', 'greenery', 'birds', 'plants'],
    cultural: ['historic', 'clock', 'antique', 'monument', 'conservation', 'museum', 'art', 'exhibits', 'galleries'],
    recreational: ['scenic', 'walking', 'jogging', 'cycling', 'skating', 'recreation'],
    family: ['kid-friendly', 'family', 'interactive', 'educational', 'science', 'aviary'],
    landmark: ['landmark', 'iconic', 'tower', 'rock', 'views', 'sightseeing'],
    commercial: ['complex', 'convention', 'shopping', 'dining', 'hotel', 'ferry', 'restaurant', 'market'],
    popular: ['popular', 'tourist', 'attraction', 'sightseeing'],
  };

  const finalTags = new Set();

  tags.forEach(tag => {
    if (tag.includes('_')) {
      for (const [key, values] of Object.entries(tagMapping)) {
        if (values.includes(tag)) {
          finalTags.add(key);
          break;
        }
      }
    } else {
      finalTags.add(tag);
    }
  });

  // Map description
  for (const [key, values] of Object.entries(descriptionMapping)) {
    if (values.some(word => description.toLowerCase().includes(word))) {
      finalTags.add(key);
    }
  }

  return Array.from(finalTags);
};

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
  socketTimeoutMS: 45000, // Increase socket timeout
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());
app.use('/PlaceDetails', placeDetailsRoutes);



app.delete('/PlaceDetails', async (req, res) => {
  try {
    // The ObjectId to keep
    const keepId = '666d40519fd22893e8dae2f2';

    // Delete all documents except the one with the specified ObjectId
    const result = await PlaceDetails.deleteMany({ _id: { $ne: new mongoose.Types.ObjectId(keepId) } });
    
    res.json({ message: 'Documents deleted', result });
  } catch (error) {
    console.error('Error deleting documents:', error);
    res.status(500).json({ message: error.message });
  }
});

// Function to fetch top 20 tourist places in Vancouver and store them in MongoDB

async function fetchAndStorePlaceDetails() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;
  const baseUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+places+in+Vancouver&key=${apiKey}`;
  let url = baseUrl;
  let places = [];
  const totalResults = 20;  // Maximum number of places to fetch

  const existingPlacesCount = await PlaceDetails.countDocuments();
  if (existingPlacesCount > 5) {
    console.log('More than 5 places already exist in the database. Skipping fetch.');
    return;
  }

  try {
    while (places.length < totalResults) {
      const response = await axios.get(url);
      places = places.concat(response.data.results);

      if (!response.data.next_page_token || places.length >= totalResults) {
        break;
      }

      url = `${baseUrl}&pagetoken=${response.data.next_page_token}`;
      // Google recommends a short delay between paginated requests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    places = places.slice(0, totalResults); // Limit to top 20 results

    const placeDetailsArray = await Promise.all(places.map(async (place) => {
      if (!place.place_id) {
        console.error('place_id is undefined for place:', place);
        return null; // Skip places without a valid place_id
      }

      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('popular') : ['popular'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);
      console.log('Tags:', finalTags);

      return {
        placeId: place.place_id,
        placeName: details.name,
        address: details.formatted_address,
        reviewsCount: details.user_ratings_total,
        description: editorialSummary,
        photos: details.photos ? details.photos.slice(0, 5).map(photo => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${photo.photo_reference}&key=${apiKey}`) : [],
        location: {
          mapUrl: `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${details.place_id}`,
          address: details.formatted_address,
          phone: details.formatted_phone_number || ''
        },
        convenience: {
          accessibility: details.accessibility || [],
          amenities: details.amenities || [],
          children: details.children || [],
          pets: details.pets || []
        },
        rating: details.rating,
        reviews: details.reviews ? details.reviews.map(review => ({
          userName: review.author_name,
          profileImage: review.profile_photo_url,
          rating: review.rating,
          reviewText: review.text,
        })) : [],
        openingHours: openingHours,
        tags: tags, // Save the final tags
        finalTags: finalTags
      };
    }));

    await PlaceDetails.insertMany(placeDetailsArray);
    console.log('Place details have been successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching place details:', error);
  }
}

async function fetchAndStorePlaceDetails_family() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;
  const baseUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+places+in+Vancouver+family&key=${apiKey}`;
  let url = baseUrl;
  let places = [];
  const totalResults = 20;  // Maximum number of places to fetch

  const existingPlacesCount = await PlaceDetails.countDocuments();
  if (existingPlacesCount > 25) {
    console.log('More than 5 places already exist in the database. Skipping fetch.');
    return;
  }

  try {
    while (places.length < totalResults) {
      const response = await axios.get(url);
      places = places.concat(response.data.results);

      if (!response.data.next_page_token || places.length >= totalResults) {
        break;
      }

      url = `${baseUrl}&pagetoken=${response.data.next_page_token}`;
      // Google recommends a short delay between paginated requests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    places = places.slice(0, totalResults); // Limit to top 20 results

    const placeDetailsArray = await Promise.all(places.map(async (place) => {
      if (!place.place_id) {
        console.error('place_id is undefined for place:', place);
        return null; // Skip places without a valid place_id
      }

      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('family') : ['family'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);
      console.log('Tags:', finalTags);

      return {
        placeId: place.place_id,
        placeName: details.name,
        address: details.formatted_address,
        reviewsCount: details.user_ratings_total,
        description: editorialSummary,
        photos: details.photos ? details.photos.slice(0, 5).map(photo => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${photo.photo_reference}&key=${apiKey}`) : [],
        location: {
          mapUrl: `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${details.place_id}`,
          address: details.formatted_address,
          phone: details.formatted_phone_number || ''
        },
        convenience: {
          accessibility: details.accessibility || [],
          amenities: details.amenities || [],
          children: details.children || [],
          pets: details.pets || []
        },
        rating: details.rating,
        reviews: details.reviews ? details.reviews.map(review => ({
          userName: review.author_name,
          profileImage: review.profile_photo_url,
          rating: review.rating,
          reviewText: review.text,
        })) : [],
        openingHours: openingHours,
        tags: tags, // Save the final tags
        finalTags: finalTags
      };
    }));

    await PlaceDetails.insertMany(placeDetailsArray);
    console.log('Place details have been successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching place details:', error);
  }
}

async function fetchAndStorePlaceDetails_nature() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;
  const baseUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+places+in+Vancouver+nature&key=${apiKey}`;
  let url = baseUrl;
  let places = [];
  const totalResults = 20;  // Maximum number of places to fetch

  const existingPlacesCount = await PlaceDetails.countDocuments();
  if (existingPlacesCount > 45) {
    console.log('More than 5 places already exist in the database. Skipping fetch.');
    return;
  }

  try {
    while (places.length < totalResults) {
      const response = await axios.get(url);
      places = places.concat(response.data.results);

      if (!response.data.next_page_token || places.length >= totalResults) {
        break;
      }

      url = `${baseUrl}&pagetoken=${response.data.next_page_token}`;
      // Google recommends a short delay between paginated requests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    places = places.slice(0, totalResults); // Limit to top 20 results

    const placeDetailsArray = await Promise.all(places.map(async (place) => {
      if (!place.place_id) {
        console.error('place_id is undefined for place:', place);
        return null; // Skip places without a valid place_id
      }

      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('nature') : ['nature'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);
      console.log('Tags:', finalTags);

      return {
        placeId: place.place_id,
        placeName: details.name,
        address: details.formatted_address,
        reviewsCount: details.user_ratings_total,
        description: editorialSummary,
        photos: details.photos ? details.photos.slice(0, 5).map(photo => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${photo.photo_reference}&key=${apiKey}`) : [],
        location: {
          mapUrl: `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${details.place_id}`,
          address: details.formatted_address,
          phone: details.formatted_phone_number || ''
        },
        convenience: {
          accessibility: details.accessibility || [],
          amenities: details.amenities || [],
          children: details.children || [],
          pets: details.pets || []
        },
        rating: details.rating,
        reviews: details.reviews ? details.reviews.map(review => ({
          userName: review.author_name,
          profileImage: review.profile_photo_url,
          rating: review.rating,
          reviewText: review.text,
        })) : [],
        openingHours: openingHours,
        tags: tags, // Save the final tags
        finalTags: finalTags
      };
    }));

    await PlaceDetails.insertMany(placeDetailsArray);
    console.log('Place details have been successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching place details:', error);
  }
}
/*
fetchAndStorePlaceDetails().then(() => {
  console.log('Place details fetched and updated.');
}).catch(err => {
  console.error('Error in fetchAndStorePlaceDetails:', err);
});

fetchAndStorePlaceDetails_family().then(() => {
  console.log('Place details family fetched and updated.');
}).catch(err => {
  console.error('Error in fetchAndStorePlaceDetails_family:', err);
});

fetchAndStorePlaceDetails_nature().then(() => {
  console.log('Place details nature fetched and updated.');
}).catch(err => {
  console.error('Error in fetchAndStorePlaceDetails_nature:', err);
});*/

// Define a route to fetch top 20 tourist places in Vancouver from MongoDB
app.get('/vancouver-places', async (req, res) => {
  try {
    const places = await PlaceDetails.find().limit(20);
    res.json(places);
  } catch (error) {
    console.error('Error retrieving place details:', error);
    res.status(500).json({ message: error.message });
  }
});

app.get('/placelist', async (req, res) => {
  try {
    const places = await PlaceDetails.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/register', (req, res)=>{
  // To post / insert data into database
  console.log(req.body)
  const {email, password, role} = req.body;
  FormDataModel.findOne({email: email, role: role})
    .then(user => {
      if(user){
        res.json("Already registered")
      }
      else{
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.json(err))
      }
    })
  
})

app.post('/resetAccount', (req, res)=>{
  // To post / insert data into database
  console.log(req.body)
  const {email, password, password2, role} = req.body;
  FormDataModel.updateOne({email: email, role: role, password: password}, {password: password2})
    .then(result => {
      if (result.matchedCount === 0) {
        res.json("Reset Failed! Please Check Old Password!");
      } else {
        res.json({message: "Success", data: result})
      }
    }).catch(err => {
    res.json("Reset Failed! Please Check Old Password!");
  })
  
})

app.post('/login', (req, res)=>{
  // To find record from the database
  const {email, password, role} = req.body;
  FormDataModel.findOne({email: email, role: role})
    .then(user => {
      console.log(user)
      if(user){
        // If user found then these 2 cases
        if(user.password === password) {
          res.json({message: "Success", data: user});
        }
        else{
          res.json("Wrong password");
        }
      }
      // If user not found then
      else{
        res.json("No records found! ");
      }
    })
})

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
