const express = require('express');
const router = express.Router();
const PlaceDetails = require('../models/PlaceDetails'); 
const placeDetailsController = require('../controllers/placeDetailsController');
const verifyToken = require('../middlewares/verifyToken');

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

// Route to add a review with rating
router.post('/:id/reviews', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { userId, userName, reviewText, rating } = req.body;

  const newReview = {
    userId: userId,
    userName: userName,
    reviewText: reviewText,
    rating: rating
  };

  console.log("received", newReview);

  try {
    const place = await PlaceDetails.findById(id);
    console.log('Received place:', place.placeId);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    place.reviews.push(newReview);
    await place.save();
    res.status(201).json(newReview);
    console.log('success');
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/nature', placeDetailsController.fetchAndStorePlaceDetailsNature);
router.get('/family', placeDetailsController.fetchAndStorePlaceDetailsFamily);
router.get('/popular', placeDetailsController.fetchAndStorePlaceDetailsPopular);
router.delete('/remove-duplicates', placeDetailsController.removeDuplicatePlaceNames);
router.delete('/', placeDetailsController.deleteAllExceptOne);

module.exports = router;
