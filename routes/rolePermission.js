const express = require('express');
const router = express.Router();
const { assignPermissionToRole } = require('../controllers/rolePermissionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/assign', authMiddleware, assignPermissionToRole);

module.exports = router;
