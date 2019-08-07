/*const http = require('http');
const data = {
    firstName: 'Nishant',
    lastname: 'Singh'
}

const site = http.createServer(function(req, res) {
    console.log('Hello World');
    console.log(req.headers);
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write(JSON.stringify(data));
    res.end();
});
site.listen(3000);*/

var express = require('express');
var app = express()

app.get('/', function(req, res) {
    res.send('WHATS there')
})

app.listen(3000)