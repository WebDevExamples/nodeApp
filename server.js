/**
 * Created by john on 16/11/2015.
 */
var http = require('http');
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');





//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://main:basiltdog1@ds054308.mongolab.com:54308/rgutest';


http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");

            // do some work here with the database.

            //Close connection
            db.close();
        }
        response.end('Finished, Connection closed \n');
    });

}).listen(8080);
