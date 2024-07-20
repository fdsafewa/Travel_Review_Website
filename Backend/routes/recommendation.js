const express = require('express');
const router = express.Router();
const recommendController = require('../controllers/recommendController');

router.post('/recommend', recommendController.getRecommendations);
router.get('/:userId', recommendController.getRecommendationPlaces);

module.exports = router;