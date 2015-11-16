/**
 * Created by john on 16/11/2015.
 */
var http = require('http');
//lets require/import the mongodb native drivers.
//var mongodb = require('mongodb');
var port = process.env.PORT || 1337;




//We need to work with "MongoClient" interface in order to connect to a mongodb server.
//var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://main:basiltdog1@ds054308.mongolab.com:54308/rgutest';


http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Connecting');
    // Use connect method to connect to the Server
    //MongoClient.connect(url, function (err, db) {
    //    if (err) {
     //       res.write('Unable to connect to the mongoDB server. Error:' + err);
      //  } else {
       //     //HURRAY!! We are connected. :)
        //    res.write('Connection established to' + url);

//            // do some work here with the database.

  //          //Close connection
    //        db.close();
     //   }
    //});
    res.end('Hello World\n');
}).listen(port);