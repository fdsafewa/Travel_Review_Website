const { db2 } = require('../database/database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
    
        required: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    recommendations: [{
        place_id: mongoose.Schema.Types.ObjectId,
        place_name: String,
        score: Number
      }]
});

const User = db2.model('User', UserSchema);
module.exports = User;
