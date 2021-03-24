const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const auth = require('../middleware/auth');
const { addProductValidator } = require('../middleware/validations')


router.post('/', auth('createAny','product'),addProductValidator, productsController.addProduct);



module.exports = router;