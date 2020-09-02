// define que vamos utilizar o sequelize como ORM
const Sequelize = require('sequelize');

// define que vamos usar em modo de produção ou desenvolvimento
const environment = process.env.NODE_ENV || 'development';
const config = require('../config/config') [environment];

// passando para o sequelize os dados do database
const sequelize = new Sequelize (
  config.database.name,
  config.database.user,
  config.database.password,

  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

module.exports = sequelize;
