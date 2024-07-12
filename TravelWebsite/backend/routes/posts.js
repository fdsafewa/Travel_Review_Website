const express = require('express');
const { createPost, getAllPost, getPostItem, createComment } = require('../controllers/postController')
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload, createPost)
router.get('/all', getAllPost)
router.get('/:id', getPostItem)
router.post('/writecomment/:id', createComment)


module.exports = router