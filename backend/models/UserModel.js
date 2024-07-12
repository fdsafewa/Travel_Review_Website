const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
  birthday: {
    type: Date,
  },
  country: {
    type: String,
  },
  bio: {
    type: String,
  },
  travelPreferences: {
    type: String,
  },
  contactInfo: {
    type: String,
  }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
