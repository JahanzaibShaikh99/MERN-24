const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.post('/product', productsController.addProduct);
router.get('/product', productsController.getProduct);
router.put('/product/:id', productsController.updateProduct);
router.delete('/product/:id', productsController.deleteProduct);


module.exports = router;