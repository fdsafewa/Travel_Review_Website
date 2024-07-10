require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const PlaceDetails = require('./models/PlaceDetails'); // Ensure this path is correct
const placeDetailsRoutes = require('./routes/placeDetails');
const FormDataModel = require ('./models/FormData');
const { v4: uuidv4 } = require('uuid'); 
const multer = require('multer');
const bucket = require('./googleCloudStorage'); 
const upload = multer({ storage: multer.memoryStorage() });

const app = express();
async function removeDuplicatePlaceNames() {
  try {
    const duplicates = await PlaceDetails.aggregate([
      {
        $group: {
          _id: "$placeName",
          count: { $sum: 1 },
          ids: { $push: "$_id" }
        }
      },
      {
        $match: {
          count: { $gt: 1 }
        }
      }
    ]);

    for (const duplicate of duplicates) {
      const idsToDelete = duplicate.ids.slice(1); // Keep the first one, delete the rest
      await PlaceDetails.deleteMany({ _id: { $in: idsToDelete } });
      console.log(`Deleted ${idsToDelete.length} duplicates for placeName: ${duplicate._id}`);
    }

    console.log('Duplicate removal complete.');
  } catch (error) {
    console.error('Error removing duplicates:', error);
  }
}


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

mongoose.connect(mongoURI)
.then(() => {
  console.log('MongoDB connected');
  removeDuplicatePlaceNames();
})
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
    
    
      const existingPlace = await PlaceDetails.findOne({ placeName: place.name });
      if (existingPlace) {
        console.log(`Place with name ${place.name} already exists. Skipping.`);
        return null; // Skip if place already exists
      }
 
      
      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      if (!details.place_id) {
        console.error('Details do not contain a place_id:', details);
        return null;
      }

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('popular') : ['popular'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);

      return {
        placeId: details.place_id,
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
    console.error('Error fetching popular place details:', error);
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

   
      const existingPlace = await PlaceDetails.findOne({ placeName: place.name });
      if (existingPlace) {
        console.log(`Place with name ${place.name} already exists. Skipping.`);
        return null; // Skip if place already exists
      }

      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      if (!details.place_id) {
        console.error('Details do not contain a place_id:', details);
        return null;
      }

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('family') : ['family'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);

      return {
        placeId: details.place_id,
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
    const validPlaceDetails = placeDetailsArray.filter(detail => detail !== null);
    await PlaceDetails.insertMany(validPlaceDetails);
    console.log('Place details have been successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching place family details:', error);
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
    
     
      const existingPlace = await PlaceDetails.findOne({ placeName: place.name });
      if (existingPlace) {
        console.log(`Place with name ${place.name} already exists. Skipping.`);
        return null; // Skip if place already exists
      }

      const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
      const placeDetailsResponse = await axios.get(placeDetailsUrl);
      const details = placeDetailsResponse.data.result;

      if (!details.place_id) {
        console.error('Details do not contain a place_id:', details);
        return null;
      }

      const editorialSummary = details.editorial_summary ? details.editorial_summary.overview : '';

      const openingHours = details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] };

      const tags = details.types ? details.types.concat('nature') : ['nature'];

      // Map to final tags
      const finalTags = mapToTags(tags, editorialSummary);

      return {
        placeId: details.place_id,
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
    const validPlaceDetails = placeDetailsArray.filter(detail => detail !== null); 
    await PlaceDetails.insertMany(validPlaceDetails);
    console.log('Place details have been successfully fetched and stored.');
  } catch (error) {
    console.error('Error fetching natural place details:', error);
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
});
*/
// Define a route to fetch top 20 tourist places in Vancouver from MongoDB

const uploadRoutes = require('./upload');
app.use(uploadRoutes);


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

app.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const searchResults = await PlaceDetails.find({
      $or: [
        { placeName: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
        { finalTags: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(searchResults);
  } catch (error) {
    console.error('Error searching places:', error);
    res.status(500).json({ message: error.message });
  }
});


app.post('/addPlace', async (req, res) => {
  const placeData = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;

  try {
    // Perform a text search to find the place by name
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(placeData.placeName)}&key=${apiKey}`;
    const textSearchResponse = await axios.get(textSearchUrl);

    if (!textSearchResponse.data.results || textSearchResponse.data.results.length === 0) {
      return res.status(404).json({ message: 'Place not found on Google Places.' });
    }

    const place = textSearchResponse.data.results[0]; // Use the first result

    // Fetch detailed information using the place_id
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${apiKey}`;
    const placeDetailsResponse = await axios.get(placeDetailsUrl);
    const details = placeDetailsResponse.data.result;

    if (!details.place_id) {
      return res.status(400).json({ message: 'Invalid place details from Google Places API.' });
    }
     
    const googlePhotos = details.photos ? details.photos.slice(0, 5).map(photo => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${photo.photo_reference}&key=${apiKey}`) : [];
    const combinedPhotos = placeData.photos ? placeData.photos.concat(googlePhotos) : googlePhotos;
    // Create a new place object with the fetched details
    const newPlace = new PlaceDetails({
      id: uuidv4(), // Generate a unique ID for the new place
      placeId: details.place_id,
      placeName: details.name,
      address: details.formatted_address,
      reviewsCount: details.user_ratings_total,
      description: placeData.description,
      photos: combinedPhotos,
      location: {
        mapUrl: `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${details.place_id}`,
        address: details.formatted_address,
        phone: details.formatted_phone_number || ''
      },
      convenience: {
        accessibility: placeData.convenience ? placeData.convenience.accessibility || [] : [],
        amenities: placeData.convenience ? placeData.convenience.amenities || [] : [],
        children: placeData.convenience ? placeData.convenience.children || [] : [],
        pets: placeData.convenience ? placeData.convenience.pets || [] : []
      },
      rating: details.rating,
      reviews: details.reviews ? details.reviews.map(review => ({
        userName: review.author_name,
        profileImage: review.profile_photo_url,
        rating: review.rating,
        reviewText: review.text,
      })) : [],
      openingHours: details.opening_hours ? {
        periods: details.opening_hours.periods || [],
        weekday_text: details.opening_hours.weekday_text || []
      } : { periods: [], weekday_text: [] },
      tags: details.types ? details.types.concat('popular') : ['popular'],
      finalTags: placeData.finalTags || []
    });

    // Save the new place to the database
    const savedPlace = await newPlace.save();

    // Send back the generated ID
    res.status(201).json({ id: savedPlace.id });
  } catch (error) {
    console.error('Error saving new place:', error);
    res.status(500).json({ message: 'Failed to add place.' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
