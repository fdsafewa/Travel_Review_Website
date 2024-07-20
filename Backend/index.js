require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const bucket = require('./googleCloudStorage');
const upload = multer({ storage: multer.memoryStorage() });
const {db1, db2} = require('./database/database')
const path = require('path');
const app = express();

// MongoDB connection string with the database name specified
// const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://vicky:ZWI5s1lm6fcox8UH@cluster0.moyyczg.mongodb.net/TravelReview?retryWrites=true&w=majority';

// mongoose.connect(mongoURI)
//   .then(async () => {
//     console.log('MongoDB connected');
//     const placeDetailsController = require('./controllers/placeDetailsController');
//     await placeDetailsController.fetchAndStorePlaceDetailsPopular();
//     await placeDetailsController.fetchAndStorePlaceDetailsFamily();
//     await placeDetailsController.fetchAndStorePlaceDetailsNature();
//   })
//   .catch((err) => console.error('MongoDB connection error:', err));

const startServer = async () => {
  try {
    await db1;
    console.log('Connected to db1');
    await db2;
    console.log('Connected to db2');

    const placeDetailsController = require('./controllers/placeDetailsController');
    await placeDetailsController.fetchAndStorePlaceDetailsPopular();
    await placeDetailsController.fetchAndStorePlaceDetailsFamily();
    await placeDetailsController.fetchAndStorePlaceDetailsNature();

  } catch (err) {
    console.error('Database connection error:', err);
  }
};

app.use(cors());
app.use(express.json());

// Routes
const placeDetailsRoutes = require('./routes/placeDetails');
const userRoutes = require('./routes/user');
const placeListRoutes = require('./routes/placelist');
const addPlaceRoutes = require('./routes/addPlace');
const searchRoutes = require('./routes/search');
const postRoutes = require('./routes/posts');
const recommendationRoutes = require('./routes/recommendation');


app.use('/PlaceDetails', placeDetailsRoutes);
app.use('/user', userRoutes);
app.use('/placelist', placeListRoutes);
app.use('/addplace', addPlaceRoutes);
app.use('/search', searchRoutes); 
app.use('/post', postRoutes); 
app.use('/recommendation', recommendationRoutes); 
// Other routes
app.use(require('./upload'));

app.use('/', express.static(path.join(__dirname, 'upload_picture')));

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
