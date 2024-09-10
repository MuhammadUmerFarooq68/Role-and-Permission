// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config()
module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    console.log('Decoded token:', decoded);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      console.log('Invalid token');
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log('Unauthorized:', err.message);
    res.status(401).json({ message: 'Unauthorized' });
  }
};
