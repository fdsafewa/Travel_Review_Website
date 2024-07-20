const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Route to search places
router.get('/', searchController.searchPlaces);

module.exports = router;
