const express = require('express');
const router = express.Router();
const addPlace = require('../controllers/addPlace');

// Route to add a place
router.post('/', addPlace);

module.exports = router;
