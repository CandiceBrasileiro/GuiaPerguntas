const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'bibi1fred2Msql', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
