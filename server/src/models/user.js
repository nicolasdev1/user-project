// define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// obtem dados de conexão entre sequelize e database mysql
const sequelize = require('../database/database');

// cria tabela no bd e seus campos
const user = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [3, 100]
    },
  },
  salary: {
    allowNull: false,
    type: Sequelize.DOUBLE(),
    validate: {
      len: [1, 999999]
    },
  },
  date_birth: {
    allowNull: false,
    type: Sequelize.DATE(),
  },
  active: {
    allowNull: false,
    type: Sequelize.BOOLEAN(),
    defaultValue: true,
  }
});

module.exports = user;
