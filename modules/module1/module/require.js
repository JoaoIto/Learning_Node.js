/* Importando e exibindo no console módulo */
let module = require("./module");
console.log(module);

/* ---------------------------------------- */

/* Exemplo padrão de uma função require, que pode levar diversos argumentos e parâmetros ao carregar o módulo */

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to this page!");
    res.end();
  })
  .listen(3000);
