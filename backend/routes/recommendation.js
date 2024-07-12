const express = require("express");
const router = express.Router();
const recommendationController = require("../controllers/recommendation");

router.get("/calculateById/:user_id", recommendationController.calculateRecommendationsById);
router.get("/calculateByName/:user_id", recommendationController.calculateRecommendationsByName);

module.exports = router;
