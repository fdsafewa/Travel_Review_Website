const mongoose = require("mongoose");

const recommendationSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  recommendations: [
    {
      gmap_id: String,
      score: Number,
    }
  ],
});

module.exports = mongoose.model("Recommendation", recommendationSchema);
