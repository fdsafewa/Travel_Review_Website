const { db1 } = require('../database/database');
const mongoose = require("mongoose");

const attractionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    gmap_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Attraction", attractionSchema);
const Attraction = db1.model('Attraction', UserSchema);
module.exports = Attraction;
