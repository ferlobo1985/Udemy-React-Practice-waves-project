const express = require('express');
const brandControllers = require('../controllers/brand.controller');
const router = express.Router();
const auth = require('../middleware/auth');


router.post('/brand', auth( 'createAny','brand' ), brandControllers.addBrand)


module.exports = router;