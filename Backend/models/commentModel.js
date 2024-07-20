const { db2 } = require('../database/database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Comment = db2.model('Comment', CommentSchema);
module.exports = Comment;
