const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const siteController = require('../controllers/site.controller');

router.route('/')
.post(auth('createAny','site'), siteController.postSiteArgs)


module.exports = router;