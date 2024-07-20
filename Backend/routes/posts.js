const express = require('express');
const { createPost, getAllPost, getPostItem, createComment } = require('../controllers/postController')
const upload = require('../middlewares/upload');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/', verifyToken,upload, createPost)
router.get('/all', getAllPost)
router.get('/:id', getPostItem)
router.post('/writecomment/:id',verifyToken, createComment)


module.exports = router