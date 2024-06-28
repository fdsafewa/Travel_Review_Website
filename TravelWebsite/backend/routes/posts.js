const express = require('express');
const { createPost } = require('../controllers/postController')
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload, createPost)

module.exports = router