const express = require('express');

const productController = require('../Controllers/product');

const router = express.Router();

router.get('/add-product', productController.getProduct);
router.post('/add-product', productController.postProduct);

module.exports = router;