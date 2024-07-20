const { db2 } = require('../database/database');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = db2.model("Post", PostSchema);
module.exports = Post;
