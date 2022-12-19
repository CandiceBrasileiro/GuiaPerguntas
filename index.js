const express = require("express");
const app = express();

// Usar o ejs como view engine
app.set('view engine', 'ejs');
// Carregar arquivos estáticos
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
})

app.listen(8080,()=>{console.log("App rodando!")});