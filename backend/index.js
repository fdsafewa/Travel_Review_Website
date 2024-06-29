const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormDataModel = require ('./models/FormData');

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


app.post('/register', (req, res)=>{
  // To post / insert data into database
  console.log(req.body)
  const {email, password, role} = req.body;
  FormDataModel.findOne({email: email, role: role})
    .then(user => {
      if(user){
        res.json("Already registered")
      }
      else{
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.json(err))
      }
    })
  
})

app.post('/resetAccount', (req, res)=>{
  // To post / insert data into database
  console.log(req.body)
  const {email, password, password2, role} = req.body;
  FormDataModel.updateOne({email: email, role: role, password: password}, {password: password2})
    .then(result => {
      if (result.matchedCount === 0) {
        res.json("Reset Failed! Please Check Old Password!");
      } else {
        res.json({message: "Success", data: result})
      }
    }).catch(err => {
    res.json("Reset Failed! Please Check Old Password!");
  })
  
})

app.post('/login', (req, res)=>{
  // To find record from the database
  const {email, password, role} = req.body;
  FormDataModel.findOne({email: email, role: role})
    .then(user => {
      console.log(user)
      if(user){
        // If user found then these 2 cases
        if(user.password === password) {
          res.json({message: "Success", data: user});
        }
        else{
          res.json("Wrong password");
        }
      }
      // If user not found then
      else{
        res.json("No records found! ");
      }
    })
})

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
