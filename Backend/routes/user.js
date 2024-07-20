const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration route
router.post('/register', userController.registerUser);

// User password reset route
router.post('/resetAccount', userController.resetAccount);

// User login route
router.post('/login', userController.loginUser);

module.exports = router;
