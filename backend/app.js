const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const reviewRoutes = require("./routes/review");
const attractionRoutes = require("./routes/attraction");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use("/api/review", reviewRoutes);
app.use("/api/attraction", attractionRoutes);

