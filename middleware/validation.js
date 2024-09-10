// validation.js
const { body, validationResult } = require('express-validator');

// Signup validation rules
const signupValidationRules = () => {
  return [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('isAdmin').isBoolean().withMessage('isAdmin must be a boolean')
  ];
};

// Login validation rules
const loginValidationRules = () => {
  return [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ];
};

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  signupValidationRules,
  loginValidationRules,
  validate
};
