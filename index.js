const express = require("express");
const app = express();

// Usar o ejs como view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  var nome = "Candice";
  var lang = "JavaScript";
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 8000
  });
});

app.listen(8080,()=>{console.log("App rodando!")});