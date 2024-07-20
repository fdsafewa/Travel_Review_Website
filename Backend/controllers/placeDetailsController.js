const PlaceDetails = require('../models/PlaceDetails');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Helper function to map tags
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

// Generic function to fetch and store place details
const fetchAndStorePlaceDetails = async (type) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;
  const baseUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+places+in+Vancouver+${type}&key=${apiKey}`;
  let url = baseUrl;
  let places = [];
  const totalResults = 20;  // Maximum number of places to fetch

  try {
    const existingPlacesCount = await PlaceDetails.countDocuments();
    if (existingPlacesCount >= 50) {
      console.log('50 or more places already exist in the database. Skipping fetch.');
      return { message: '50 or more places already exist in the database. Skipping fetch.' };
    }

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

      const tags = details.types ? details.types.concat(type) : [type];
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
        tags: tags,
        finalTags: finalTags
      };
    }));

    await PlaceDetails.insertMany(placeDetailsArray.filter(detail => detail !== null));
    console.log('Place details have been successfully fetched and stored.');
    return { message: 'Place details have been successfully fetched and stored.' };
  } catch (error) {
    console.error('Error fetching place details:', error);
    return { message: 'Error fetching place details.', error: error };
  }
};

// Controller functions
const fetchAndStorePlaceDetailsNature = async (req, res) => {
  const result = await fetchAndStorePlaceDetails('nature');
  if (res) {
    res.status(200).json(result);
  }
};

const fetchAndStorePlaceDetailsFamily = async (req, res) => {
  const result = await fetchAndStorePlaceDetails('family');
  if (res) {
    res.status(200).json(result);
  }
};

const fetchAndStorePlaceDetailsPopular = async (req, res) => {
  const result = await fetchAndStorePlaceDetails('popular');
  if (res) {
    res.status(200).json(result);
  }
};

const removeDuplicatePlaceNames = async (req, res) => {
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
    if (res) {
        res.status(200).json({ message: 'Duplicate removal complete.' });
      }
  } catch (error) {
    console.error('Error removing duplicates:', error);
    if (res) {
        res.status(500).json({ message: 'Error removing duplicates.' });
      }
  }
};


const deleteAllExceptOne = async (req, res) => {
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
  };


  
  
  

module.exports = {
  fetchAndStorePlaceDetailsNature,
  fetchAndStorePlaceDetailsFamily,
  fetchAndStorePlaceDetailsPopular,
  removeDuplicatePlaceNames,
  deleteAllExceptOne
};

