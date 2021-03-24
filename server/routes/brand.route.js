const express = require('express');
const brandController = require('../controllers/brand.controller');
const router = express.Router();
const auth = require('../middleware/auth');


router.route('/brand/:id')
.get( brandController.getBrand)
.delete( auth('deleteAny','brand'), brandController.deleteBrandById)

router.post('/brand', auth( 'createAny','brand' ), brandController.addBrand)
router.get('/all', brandController.getBrands)

module.exports = router;