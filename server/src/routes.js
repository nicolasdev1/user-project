const express = require('express');
const router = express.Router();

const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');

router.post('/users', userController.create);
router.post('/products', productController.create);

module.exports = router;
