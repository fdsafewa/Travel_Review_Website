const router = require("express").Router();
const {
  addReview,
  updateReview,
  removeReview,
  getReviewsByAttraction,
} = require("../controllers/review");

router.post("/add/:gmap_id", addReview);
router.patch("/:gmap_id/:user_id", updateReview);
router.delete("/:gmap_id/:user_id", removeReview);
router.get("/get-reviews-by-attraction/:gmap_id", getReviewsByAttraction);

module.exports = router;

