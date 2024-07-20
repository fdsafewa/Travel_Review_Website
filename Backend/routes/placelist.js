// routes/placelist.js

const express = require('express');
const router = express.Router();
const PlaceDetails = require('../models/PlaceDetails');

router.get('/', async (req, res) => {
  try {
    const places = await PlaceDetails.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
