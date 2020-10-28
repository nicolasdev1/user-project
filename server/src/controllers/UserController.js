// define a utilização do model user e a dependência http-status
const user = require('../models/user');
const status = require('http-status');

// cria o metodo create, obtendo os dados da request
exports.create = (req, res, next) => {
  const {
    name,
    salary,
    date_birth,
    active
  } = req.body;

  // popula cada um dos campos do model com os campos recebidos na request
  user.create({
    name: name,
    salary: salary,
    date_birth: date_birth,
    active: active,
  })

    // then = faz o registro do que queremos que aconteça quando a promise for resolvida
    .then(user => {
      if (user) {
        res.status(status.OK).send(user);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })

    // catch = registra o que queremos que aconteça quando a promise falhar
    .catch(err => next(err));
};

exports.index = (req, res, next) => {
  user.findAll()
    .then(user => {
      if (user) {
        res.status(status.OK).send(user);
      }
    })
    .catch(err => next(err));
};

exports.show = (req, res, next) => {
  const id = req.params.id;

  user.findByPk(id)
    .then(user => {
      if (user) {
        res.status(status.OK).send(user);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch(err => next(err));
};

exports.update = (req, res, next) => {
  const id = req.params.id;

  const {
    name,
    salary,
    date_birth,
    active
  } = req.body;

  user.findByPk(id)
    .then(user => {
      if (user) {
        user.update({
          name: name,
          salary: salary,
          date_birth: date_birth,
          active: active,
        },
        { where: { id: id } })
        .then(() => {
          res.status(status.OK).send('Usuário atualizado com sucesso!');
        })
        .catch(err => next(err));
      } else {
        res.status(status.NOT_FOUND).send('Erro inesperado ao atualizar o usuário.');
      }
    })
    .catch(err => next(err));
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  user.findByPk(id)
    .then(user => {
      if (user) {
        user.destroy({
          where: { id: id }
        })
        .then(() => {
          res.status(status.OK).send('Usuário deletado com sucesso!');
        })
        .catch(err => next(err));
      } else {
        res.status(status.NOT_FOUND).send('Erro inesperado ao deletar o usuário.');
      }
    })
    .catch(err => next(err));
};
