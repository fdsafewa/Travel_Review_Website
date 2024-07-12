const mongoose = require("mongoose");
const Review = require("../models/review");
const fs = require('fs');
const math = require('mathjs');
const path = require('path');

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data', filename), 'utf8'));
}

const sigma = math.diag(readJSON('sigma.json'));
const concept = math.matrix(readJSON('concept.json'));
const meta = readJSON('meta.json');
const column = readJSON('column.json');

exports.calculateRecommendationsById = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) return res.status(400).json({ error: "Invalid user ID!" });

  const reviews = await Review.find({ user_id });
  const reviewedGmapIds = reviews.map(review => review.gmap_id);

  let queryVector = math.zeros(column.length)._data;
  reviews.forEach(review => {
    const colIndex = column.indexOf(review.gmap_id);
    if (colIndex !== -1) {
      queryVector[colIndex] = review.rating;
    }
  });

  let resultVector = math.multiply(queryVector, math.transpose(concept));
  resultVector = math.multiply(resultVector, sigma);
  resultVector = math.flatten(resultVector)._data;
  const recommendations = resultVector
    .map((value, index) => ({ index, value }))
    .sort((a, b) => b.value - a.value)
    .filter(item => !reviewedGmapIds.includes(column[item.index]))
    .slice(0, 10)
    .map(item => column[item.index]);

  res.json({ recommendations });
};

exports.calculateRecommendationsByName = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) return res.status(400).json({ error: "Invalid user ID!" });

  const reviews = await Review.find({ user_id });
  const reviewedGmapIds = reviews.map(review => review.gmap_id);

  let queryVector = math.zeros(column.length)._data;
  reviews.forEach(review => {
    const colIndex = column.indexOf(review.gmap_id);
    if (colIndex !== -1) {
      queryVector[colIndex] = review.rating;
    }
  });

  let resultVector = math.multiply(queryVector, math.transpose(concept));
  resultVector = math.multiply(resultVector, sigma);
  resultVector = math.flatten(resultVector)._data;
  const recommendations = resultVector
    .map((value, index) => ({ index, value }))
    .sort((a, b) => b.value - a.value)
    .filter(item => !reviewedGmapIds.includes(column[item.index]))
    .slice(0, 10)
    .map(item => column[item.index]);
  const recommendedNames = recommendations.map(gmapId => {
    return meta.find(item => item.gmap_id === gmapId).name;
  });

  res.json({ recommendations: recommendedNames });
};
