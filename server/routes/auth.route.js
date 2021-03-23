const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/register',authController.register );
router.post('/signin',authController.signin );
router.get('/isauth',auth(), authController.isauth );




module.exports = router;