const chalk = require('chalk');
var express = require('express')
var app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!<br>Exemplo APP Node.js')
})


app.listen(port, function () {
  console.log(chalk.green("Running at Port " +  port  ));
})
