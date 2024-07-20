const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const PlaceDetails = require('../models/PlaceDetails');

const addPlace = async (req, res) => {
  const placeData = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;
  const embedKey = process.env.GOOGLE_EMBED_KEY;

  try {
    console.log('Received place data:', placeData);

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

    // Check for existing place with the same name
    const existingPlace = await PlaceDetails.findOne({ placeName: details.name });
    if (existingPlace) {
      return res.status(400).json({ message: `Place with name ${details.name} already exists.` });
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
      description: placeData.description || details.editorial_summary?.overview || '',
      photos: combinedPhotos,
      location: {
        mapUrl: `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${details.place_id}`,
        address: details.formatted_address,
        phone: details.formatted_phone_number || ''
      },
      convenience: {
        accessibility: placeData.convenience?.accessibility || [],
        amenities: placeData.convenience?.amenities || [],
        children: placeData.convenience?.children || [],
        pets: placeData.convenience?.pets || []
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

    console.log('New place object:', newPlace);

    // Save the new place to the database
    const savedPlace = await newPlace.save();

    console.log('Saved place:', savedPlace);

    // Send back the generated ID
    res.status(201).json({ id: savedPlace.id });
  } catch (error) {
    if (error.response && error.response.headers['content-type'].includes('text/html')) {
      console.error('Error response data (HTML):', error.response.data);
    } else if (error.response && error.response.data) {
      console.error('Error response data (JSON):', error.response.data);
    } else {
      console.error('Error saving new place:', error);
    }
    res.status(500).json({ message: 'Failed to add place.', error: error.message });
  }
};

module.exports = addPlace;

