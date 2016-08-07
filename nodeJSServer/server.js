var express = require('express');
var server = express();

var messages=[];

server.get('/', function (req, res) {
    res.send("funcionó");
});

server.get('/messages/', function (req, res) {
    res.send(messages);
});


server.get('/messages/:message', function (req, res) {
    res.send("El mensaje que envió es: "+ req.params.message);
    messages.push(req.params.message);
});


server.listen(3000);
