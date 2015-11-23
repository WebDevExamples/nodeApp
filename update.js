/**
 * Created by john on 23/11/2015.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;


// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://main:basiltdog1@ds054308.mongolab.com:54308/rgutest';

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");
            var collection = db.collection('users');
            // Get the documents collection
            collection.update({name: 'modulus user'}, {$set: {enabled: false}}, function (err, numUpdated) {
                if (err) {
                    response.write(err);
                } else if (numUpdated) {
                    response.write ('Updated Successfully : ' +numUpdated);
                } else {
                    response.write ('No document found with defined "find" criteria!');
                }
                db.close;
                response.end('DB closed');
            });


        }
    });

}).listen(port);
