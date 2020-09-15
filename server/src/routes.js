const express = require('express');
const router = express.Router();

const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');

router.get('/users', userController.index);
router.get('/users/:id', userController.indexDetail);
router.post('/users', userController.create);

router.get('/products', productController.index);
router.get('/products/:id', productController.indexDetail);
router.post('/products', productController.create);

module.exports = router;
