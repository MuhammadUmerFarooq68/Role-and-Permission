const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { signupValidationRules, loginValidationRules, validate } = require('../middleware/validation');

router.post('/signup', signupValidationRules(), validate, signup);
router.post('/login', loginValidationRules(), validate, login);

module.exports = router;
