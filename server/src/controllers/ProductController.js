// define a utilização do model user e a dependência http-status
const product = require('../models/product');
const status = require('http-status');

// cria o metodo create, obtendo os dados da request
exports.create = (req, res, next) => {
  const productName = req.body.productName;
  const productCategory = req.body.productCategory;
  // define se o produto é novo ou usado
  const productStatus = req.body.productStatus;
  const color = req.body.color;
  const price = req.body.price;
  const stock = req.body.stock;
  
  // popula cada um dos campos do model com os campos recebidos na request
  product.create({
    productName: productName,
    productCategory: productCategory,
    productStatus: productStatus,
    color: color,
    price: price,
    stock: stock,
  })

    // then = faz o registro do que queremos que aconteça quando a promise for resolvida
    .then(product => {
      if (product) {
        res.status(status.OK).send(product);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })

    // catch = registra o que queremos que aconteça quando a promise falhar
    .catch(err => next(err));
};

exports.index = (req, res, next) => {
  product.findAll()
    .then(product => {
      if (product) {
        res.status(status.OK).send(product);
      }
    })
    .catch(err => next(err));
};

exports.indexDetail = (req, res, next) => {
  const id = req.params.id;

  product.findByPk(id)
    .then(product => {
      if (product) {
        res.status(status.OK).send(product);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch(err => next(err));
};
