const express = require('express');
const router = express.Router();
const { createRole, getRoles } = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createRole);
router.get('/', authMiddleware, getRoles);

module.exports = router;
