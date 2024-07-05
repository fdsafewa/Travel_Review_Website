const Post = require('../models/postModel');


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
            user: userId
        });

   
        await post.save();

   
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getAllPost = async (req,res) => {
    try {
        const posts = await Post.find({}, 'title image');
        res.json(posts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }

}

module.exports = {createPost, getAllPost }