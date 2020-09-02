// define a utilização do model user e a dependência http-status
const user = require('../models/user');
const status = require('http-status');

// cria o metodo insert, obtendo os dados da request
exports.insert = (req, res, next) => {
  const name = req.body.name;
  const salary = req.body.salary;
  const dateBirth = req.body.dateBirth;
  const active = req.body.active;

  // popula cada um dos campos do model com os campos recebidos na request
  user.create({
    name: name,
    salary: salary,
    dateBirth: dateBirth,
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
