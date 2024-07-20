const User = require('../models/userModel');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = process.env.SECRET;
const SALT_ROUNDS = 10;

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log('Received email:', email);
  console.log('Received role:', role);
  try {
    const user = await User.findOne({ email, role });
    if (user) {
      return res.json("Already registered");
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.json(err);
  }
};

// Reset user account
const resetAccount = async (req, res) => {
  const { email, password, password2, role } = req.body;
  try {
    const result = await User.updateOne({ email, role, password }, { password: password2 });
    if (result.matchedCount === 0) {
      return res.json("Reset Failed! Please Check Old Password!");
    }
    res.json({ message: "Success", data: result });
  } catch (err) {
    res.json("Reset Failed! Please Check Old Password!");
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.findOne({ email, role });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1d' });
        return res.json({ message: "Success", data: user, token });
      } else {
        return res.status(401).json("Wrong password");
      }
    } else {
      return res.status(404).json("No records found!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  registerUser,
  resetAccount,
  loginUser
};
