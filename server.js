/**
 * Created by john on 16/11/2015.
 */
var http = require('http');
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var port = process.env.PORT || 1337;

var http = require('http')
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(port);

