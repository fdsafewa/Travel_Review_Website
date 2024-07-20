const Post = require("../models/postModel");
const Comment = require('../models/commentModel');
const User = require('../models/userModel');


const createPost = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const { title, description, address, userId } = req.body;
    const image = req.file.filename;

    const post = new Post({
      title,
      description,
      address,
      image,
      user: userId,
    });

    await post.save();

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({}, "title image description comments createdAt");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostItem = async (req, res) => {
        try {
          const postId = req.params.id;
          const post = await Post.findById(postId).populate({
            path: 'comments',
            populate: {
              path: 'user',
              select: 'name email'
            }
          });
      
          if (post) {
            res.json(post);
          } else {
            res.status(404).json({ message: "Post not found" });
          }
        } catch (error) {
          res.status(500).json({ message: "Server error" });
        }
      };

const createComment = async (req, res) => {
    try {
        const { content, rating, userId } = req.body;
        const postId = req.params.id;
        console.log(postId)
        console.log(userId)
        const post = await Post.findById(postId);
        const user = await User.findById(userId);
        console.log("found")


        if (!post) {
            console.log("no post")
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!user) {
            console.log("no user")
            return res.status(404).json({ message: 'User not found' });
        }

        const comment = new Comment({ content, rating, user: user._id, post: post._id });
        await comment.save();

        post.comments.push(comment._id);
        await post.save();

        user.comments.push(comment._id);
        await user.save();

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createPost, getAllPost, getPostItem, createComment };
