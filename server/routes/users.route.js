const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const auth = require('../middleware/auth');


router.route('/profile')
.get(auth('readOwn','profile'),usersController.profile)



module.exports = router;