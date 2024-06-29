const { isValidObjectId } = require("mongoose");
const Attraction = require("../models/attraction");
const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { gmap_id } = req.params;
  const { text, rating } = req.body;
  const userId = req.user._id;

  if (!isValidObjectId(gmap_id)) return res.status(400).json({ error: "Invalid Attraction ID!" });

  const attraction = await Attraction.findOne({ gmap_id, status: "public" });
  if (!attraction) return res.status(404).json({ error: "Attraction not found!" });

  const isAlreadyReviewed = await Review.findOne({
    user_id: userId,
    gmap_id: attraction._id,
  });
  if (isAlreadyReviewed)
    return res.status(400).json({ error: "Invalid request, review is already there!" });

  const newReview = new Review({
    user_id: userId,
    gmap_id: attraction._id,
    text,
    rating,
  });

  attraction.reviews.push(newReview._id);
  await attraction.save();
  
  await newReview.save();

  res.json({ message: "Your review has been added." });
};

exports.updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { text, rating } = req.body;
  const userId = req.user._id;

  if (!isValidObjectId(reviewId)) return res.status(400).json({ error: "Invalid Review ID!" });

  const review = await Review.findOne({ user_id: userId, _id: reviewId });
  if (!review) return res.status(404).json({ error: "Review not found!" });

  review.text = text;
  review.rating = rating;

  await review.save();

  res.json({ message: "Your review has been updated." });
};

exports.removeReview = async (req, res) => {
  const { reviewId } = req.params;
  const userId = req.user._id;

  if (!isValidObjectId(reviewId)) return res.status(400).json({ error: "Invalid Review ID!" });

  const review = await Review.findOne({ user_id: userId, _id: reviewId });
  if (!review) return res.status(404).json({ error: "Invalid request, review not found!" });

  const attraction = await Attraction.findById(review.gmap_id).select("reviews");
  attraction.reviews = attraction.reviews.filter((rId) => rId.toString() !== reviewId);

  await Review.findByIdAndDelete(reviewId);

  await attraction.save();

  res.json({ message: "Review removed successfully." });
};

exports.getReviewsByAttraction = async (req, res) => {
  const { gmap_id } = req.params;

  if (!isValidObjectId(gmap_id)) return res.status(400).json({ error: "Invalid Attraction ID!" });

  const attraction = await Attraction.findById(gmap_id)
    .populate({
      path: "reviews",
      populate: {
        path: "user_id",
        select: "name",
      },
    })
    .select("reviews");

  if (!attraction) return res.status(404).json({ error: "Attraction not found!" });

  const reviews = attraction.reviews.map((r) => {
    const { user_id, text, rating, _id: reviewID, time } = r;
    const { name, _id: userId } = user_id;

    return {
      id: reviewID,
      user: {
        id: userId,
        name,
      },
      text,
      rating,
      time,
    };
  });

  res.json({ reviews });
};
