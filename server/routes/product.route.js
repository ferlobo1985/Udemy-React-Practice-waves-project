const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const auth = require('../middleware/auth');
const { addProductValidator } = require('../middleware/validations')


router.post('/', auth('createAny','product'),addProductValidator, productsController.addProduct);

router.route('/product/:id')
.get(productsController.getProductById)
.patch(auth('updateAny','product'),productsController.updateProductById)
.delete(auth('deleteAny','product'),productsController.deleteProductById);

router.get('/all', productsController.allProducts);
router.post('/paginate/all', productsController.paginateProducts)

///// UPLOADING IMAGES 

module.exports = router;