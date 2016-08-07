var tessel = require('tessel');
var http = require('http');

tessel.led[2].on();

setInterval(function () {

    http.get("http://192.168.0.6:3000/messages/PaGit", function (res) {
        printResponse(res);
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
        tessel.led[3].on();
        tessel.led[2].off();
    }).on('error', function (e) {
        tessel.led[3].on();
        tessel.led[2].off();
        console.log("hubo un error", e);
    });

}, 1000);

function printResponse(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
}