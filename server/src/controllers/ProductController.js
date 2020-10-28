// define a utilização do model user e a dependência http-status
const product = require('../models/product');
const status = require('http-status');

// cria o metodo create, obtendo os dados da request
exports.create = (req, res, next) => {
  const {
    product_name,
    product_category,
    product_status,
    color,
    price,
    stock
  } = req.body;
  
  // popula cada um dos campos do model com os campos recebidos na request
  product.create({
    product_name: product_name,
    product_category: product_category,
    product_status: product_status,
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

exports.show = (req, res, next) => {
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

exports.update = (req, res, next) => {
  const id = req.params.id;

  const {
    product_name,
    product_category,
    product_status,
    color,
    price,
    stock
  } = req.body;

  product.findByPk(id)
    .then(product => {
      if (product) {
        product.update({
          product_name: product_name,
          product_category: product_category,
          product_status: product_status,
          color: color,
          price: price,
          stock: stock,
        },
        { where: { id: id } })
        .then(() => {
          res.status(status.OK).send('Produto atualizado com sucesso!');
        })
        .catch(err => next(err));
      } else {
        res.status(status.NOT_FOUND).send('Erro inesperado ao atualizar o produto.');
      }
    })
    .catch(err => next(err));
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  product.findByPk(id)
    .then(product => {
      if (product) {
        product.destroy({
          where: { id: id }
        })
        .then(() => {
          res.status(status.OK).send('Produto deletado com sucesso!');
        })
        .catch(err => next(err));
      } else {
        res.status(status.NOT_FOUND).send('Erro inesperado ao deletar o produto.');
      }
    })
    .catch(err => next(err));
};
