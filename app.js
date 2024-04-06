const express = require("express");
const app = express();

//configurações do bootstrap
app.use("/assets", express.static("./assets"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));
//definir motor de templating
app.set("view engine", "ejs");
app.set("views", "./views");
//configurações
app.set("port", process.env.port || process.env.PORT || 5001);
app.use(express.urlencoded({ extended: true }));

//definir pasta assets como estática (um género de "pública")

app.use("/clientes", require("./routes/clientes.route"));
app.use("/veiculos", require("./routes/veiculos.route"));
app.use("/reparacoes", require("./routes/reparacoes.route"));
app.use("/", require("./routes/main.route"));

app.listen(app.get("port"), () => { console.log("Servidor iniciado na porta: " + app.get("port")) });
