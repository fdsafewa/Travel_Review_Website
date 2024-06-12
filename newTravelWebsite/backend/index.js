const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// MongoDB connection string with the database name specified
const mongoURI = 'mongodb+srv://vicky:ZWI5s1lm6fcox8UH@cluster0.moyyczg.mongodb.net/TravelReview?retryWrites=true&w=majority';


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
// Define the Test schema and model
const TestSchema = new mongoose.Schema({
  email: String,
  name: String
});

// Specify the collection name explicitly
const Test = mongoose.model('Test', TestSchema, 'test');

app.use(cors());
app.use(express.json());

// Define a route to get test data
app.get('/test', async (req, res) => {
    try {
      const testData = await Test.find();
      console.log('Retrieved data:', testData); // Log the data to the terminal
      if (testData.length === 0) {
        console.log('No data found in the test collection.');
      }
      res.json(testData);
    } catch (error) {
      console.error('Error retrieving data:', error); // Log the error
      res.status(500).json({ message: error.message });
    }
  });

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
