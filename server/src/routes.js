const express = require('express');
const router = express.Router();

const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');

// create: criar
// index: listagem
// show: listagem unica
// update: atualizar
// delete: deletar

router.post('/users', userController.create);
router.get('/users', userController.index);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.delete);
router.put('/users/:id', userController.update);

router.post('/products', productController.create);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);
router.delete('/products/:id', productController.delete);
router.put('/products/:id', productController.update);

module.exports = router;
