const mongoose = require("mongoose");
const Attraction = require("../models/attraction");
const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { gmap_id } = req.params;
  const { user_id, rating, text } = req.body;

  if (!gmap_id) return res.status(400).json({ error: "Invalid Attraction!" });

  const attraction = await Attraction.findOne({ gmap_id });
  if (!attraction) return res.status(404).json({ error: "Attraction not found!" });

  const isAlreadyReviewed = await Review.findOne({
    user_id,
    gmap_id,
  });
  if (isAlreadyReviewed)
    return res.status(400).json({ error: "Invalid request, review is already there!" });

  const newReview = new Review({
    user_id,
    gmap_id,
    rating,
    text,
  });

  await newReview.save();

  res.json({ message: "Your review has been added." });
};

exports.updateReview = async (req, res) => {
  const { gmap_id, user_id } = req.params;
  const { rating, text } = req.body;

  const review = await Review.findOne({ user_id, gmap_id });
  if (!review) return res.status(404).json({ error: "Review not found" });

  review.rating = rating;
  review.text = text;

  await review.save();

  res.json({ message: "Your review has been updated." });
};

exports.removeReview = async (req, res) => {
  const { gmap_id, user_id } = req.params;

  const review = await Review.findOneAndDelete({ user_id, gmap_id });
  if (!review) return res.status(404).json({ error: "Review not found" });

  res.json({ message: "Review removed successfully." });
};

exports.getReviewsByAttraction = async (req, res) => {
  const { gmap_id } = req.params;

  if (!gmap_id) return res.status(400).json({ error: "Invalid attraction ID!" });

  const reviews = await Review.find({ gmap_id });
  res.json({ reviews });
};

