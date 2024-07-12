const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require("./models/UserModel");
const {hashPassword, verifyPassword} = require("./utils/argon2");

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
  const {name, email, password, role} = req.body;
  userModel.findOne({email: email, role: role})
    .then(async (user) => {
      if (user) {
        res.json("Already registered")
      } else {
        // 创建新的 user_id
        const user_id = new mongoose.Types.ObjectId();
        // 创建新用户对象
        const newUser = new userModel({
          user_id,
          name,
          email,
          password: await hashPassword(password),
          role,
          birthday: null,
          country: null,
          bio: null,
          travelPreferences: null,
          contactInfo: null,
        });
        console.log(newUser, '-newUser-')
        try {
          const result = await newUser.save();
          res.json(result)
        } catch(err) {
          res.json(err)
        }
      }
    })
  
})

app.post('/resetAccount', (req, res)=>{
  // To post / insert data into database
  console.log(req.body)
  const {email, password, password2, role} = req.body;
  userModel.findOne({email: email, role: role})
    .then(async (user) => {
      console.log(user, '-user-')
      const isPass = await verifyPassword(password)
      if (!isPass) {
        res.json("Reset Failed! Please Check Old Password!");
      } else {
        userModel.updateOne({email: email, role: role}, {password: await hashPassword(password2)})
          .then(result => {
            if (result.matchedCount === 0) {
              res.json("Reset Failed! Please Check Old Password!");
            } else {
              res.json({message: "Success", data: result})
            }
          }).catch(err => {
          res.json("Reset Failed! Please Check Old Password!");
        })
      }
    })
})

app.post('/login', (req, res)=>{
  // To find record from the database
  const {email, password, role} = req.body;
  userModel.findOne({email: email, role: role})
    .then(async user => {
      console.log(user)
      if (user) {
        // If user found then these 2 cases
        if (await verifyPassword(user.password, password)) {
          res.json({message: "Success", data: user});
        } else {
          res.json("Wrong password");
        }
      }
      // If user not found then
      else {
        res.json("No records found! ");
      }
    })
})

app.get('/getUser', (req, res)=> {
  const {userId} = req.query;
  userModel.findOne({user_id: userId})
    .then(async user => {
      if (user) {
        res.json({message: "Success", data: user});
      } else {
        res.json({message: "No records found! "})
      }
    })
})

app.post('/updateUser',async (req, res) => {
  const {
    user_id,
    password,
    name,
    email,
    birthday,
    country,
    bio,
    travelPreferences,
    contactInfo,
    oldPassword,
    newPassword,
    oldEmail,
    newEmail
  } = req.body.userInfo
  console.log('00000', user_id, name, email, birthday, country, bio, travelPreferences, contactInfo)
  let updateInfo = {name, email, birthday, country, bio, travelPreferences, contactInfo}
  newPassword && (updateInfo.password = await hashPassword(newPassword))
  if (newPassword) {
    const isPass = await verifyPassword(password, oldPassword)
    if (isPass) {
      const repeatPassword = await verifyPassword(password, newPassword)
      if (repeatPassword) {
        res.json("Changing password cannot be the same as the old password");
        return
      } else {
        updateInfo.password = await hashPassword(newPassword)
      }
    } else {
      res.json("Wrong Old Password");
      return
    }
  }
  if (newEmail) {
    if (oldEmail === email) {
      if (newEmail === email) {
        res.json("Changing email cannot be the same as the old email");
        return
      } else {
        updateInfo.email = newEmail
      }
    } else {
      res.json("Wrong Old Email");
      return
    }
  }
  userModel.updateOne({user_id}, updateInfo).then(result => {
    if (result.matchedCount > 0) {
      userModel.findOne({user_id}).then(user => {
        res.json({message: "Success", data: user})
      })
    } else {
      res.json("Update Failed! Please Check UserInfo!");
    }
  })
})

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
