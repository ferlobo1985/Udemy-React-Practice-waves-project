const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// /api/auth/hello...
router.get('/hello',authController.hello )


module.exports = router;