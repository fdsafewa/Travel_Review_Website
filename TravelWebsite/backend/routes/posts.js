const express = require('express');
const { createPost, getAllPost } = require('../controllers/postController')
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload, createPost)
router.get('/all', getAllPost)

module.exports = router