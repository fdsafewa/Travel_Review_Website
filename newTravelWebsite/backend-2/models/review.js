const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  gmap_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);

