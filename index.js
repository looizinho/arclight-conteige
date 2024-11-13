const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

var ledStatus = true;

wss.on('connection', (ws) => {
  console.log('ESP8266 conectado ao servidor WebSocket');
  ws.send('Conexão estabelecida com sucesso!');

  setInterval(() => {
    const message = JSON.stringify({
      ledstatus: ledStatus
    });
    ws.send(message);
    console.log('Mensagem enviada ao ESP8266:', message);
    ledStatus = !ledStatus;
  }, 3000);

  // Recebe mensagens do ESP8266
  ws.on('message', (message) => {
    console.log('Mensagem recebida do ESP8266:', message);
  });

  // Detecta quando o ESP8266 se desconecta
  ws.on('close', () => {
    console.log('ESP8266 desconectado');
  });
});

console.log(`Servidor WebSocket iniciado`);

/*
const chalk = require('chalk');
var express = require('express')
var app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!<br>ARC.LIGHT')
})


app.listen(port, function () {
  console.log(chalk.green("Running at Port " +  port  ));
})
*/

