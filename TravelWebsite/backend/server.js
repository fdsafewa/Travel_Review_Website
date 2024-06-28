require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)



mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sv9mrx3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3001);
  })
  .catch(err => {
    console.log(err);
  });

