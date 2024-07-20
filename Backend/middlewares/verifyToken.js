const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json("Access Denied");

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json("Invalid Token");
  }
};

module.exports = verifyToken;
