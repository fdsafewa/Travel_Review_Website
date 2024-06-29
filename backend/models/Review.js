const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gmap_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attraction",
    required: true,
  },
  text: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
