const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'nodejs_t1',
  'nodejs',
  '123', {
  dialect : 'mariadb',
  host: 'localhost',
  logging: console.log,
});

module.exports = sequelize;
