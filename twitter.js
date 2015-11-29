var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'uXl8060AfB6TtVZOjUPbPqiuU',
    consumer_secret: 'qWYtc0c6wskWp9OvP63LcFTxnGexfhCjLAfN7gKgcwW7zfcSdv',
    access_token_key: '14812487-6rIZpOfDmMBGFybfd26Cpe86kGw64MLGaZLaimuFN',
    access_token_secret: 'efrJVLugBwFeAVnWSx1Cx6Z8N8IJlSB3js7XjW4KUYiuc'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  });

    client.get('search/tweets', {q: 'lolcats' , count: '2'}, function(error, tweets){
        var json = "";
        json += '{ "tweets":[ ';
        for (var i =0; i< tweets.statuses.length ; i++)
        {
            json += '{ '
            json += '"name": ' + tweets.statuses[i].user.name +',';
            json += '"text": ' + tweets.statuses[i].text;
            json += ' }'
        }
        json +="] }";
        response.end(JSON.stringify(json));
    });
}).listen(port);


