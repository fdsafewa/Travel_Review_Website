const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
  }

const signupUser = async (req, res) => {
    const {name, email, password} = req.body
    try {
        const user = await User.findOne({ email });
    
        if (user) {
          res.status(400).json({ message: "Already registered" });
        } else {
          const newUser = await User.create({ name, email, password });
          const token = createToken(newUser._id);
          res.status(201).json({ email: newUser.email, token });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt with email: ${email}`);
    try {
        const user = await User.findOne({ email });
        console.log(user);
        console.log(`Stored password: ${user.password}`);
        console.log(`Provided password: ${password}`);
        if (user) {
            if (user.password === password) {
                const token = createToken(user._id);
                res.status(200).json({ message: "Success", email: User.email, token });
            } else {
                res.status(402).json({ message: "Wrong password" }); 
            }
        } else {
            res.status(404).json({ message: "No records found!" }); 
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { signupUser, loginUser }





