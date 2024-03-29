let express = require("express");
let app = express();
// Importando arquivos 
const db = require('./db/conn');
// Porta lógica
const PORT = 3080;

app.listen(PORT, () => {
    console.log(`Escutando a porta lógica ${PORT}!`);
});

// db connection 
db
 .authenticate()
 .then(() => {
    console.log("Conectou ao database com sucesso!");
 })
 .catch(err => {
    console.log("Olha o bug!", err);
 });

// routes 
app.get("/", function(req, res) {
    res.send("Home");
});


