const express = require('express');
const router = express.Router();
const PlaceDetails = require('../models/PlaceDetails'); // Import the PlaceDetails model

// Route to get all place details
router.get('/', async (req, res) => {
  try {
    const placeDetails = await PlaceDetails.find();
    res.json(placeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get place details by ID
router.get('/:id', async (req, res) => {
  try {
    const placeDetails = await PlaceDetails.findById(req.params.id);
    if (!placeDetails) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json(placeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add place details (for testing purposes)
router.post('/', async (req, res) => {
  try {
    const newPlaceDetails = new PlaceDetails(req.body);
    await newPlaceDetails.save();
    res.status(201).send('Place Details Added');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { userName, email, reviewText } = req.body;

  const newReview = {
    userName: userName,
    email: email,
    reviewText: reviewText,
  };

  try {
    const place = await PlaceDetails.findById(id);
    place.reviews.push(newReview);
    await place.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
