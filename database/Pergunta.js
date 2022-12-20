const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('perguntas', {
  titulo:{
    type:Sequelize.STRING,
    allowNull: false
  },
  descricao:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Pergunta.sync({forcce: false}).then(() => {
  console.log("Mensagem criada")
});
module.exports = Pergunta;