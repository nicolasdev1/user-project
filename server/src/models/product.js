const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const product = sequelize.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  productName: {
    allowNull: false,
    type: Sequelize.STRING(150),
    validate: {
      len: [3, 150]
    },
  },
  productCategory: {
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [3, 50]
    },
  },
  productStatus: {
    allowNull: false,
    type: Sequelize.STRING(9),
    validate: {
      len: [4, 9]
    },
  },
  color: {
    allowNull: false,
    type: Sequelize.STRING(30),
    validate: {
      len: [1, 30]
    },
  },
  price: {
    allowNull: false,
    type: Sequelize.DOUBLE(),
    validate: {
      len: [0.01, Infinity]
    },
  },
  stock: {
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = product;
