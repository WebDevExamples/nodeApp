var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;

//you need to put your own keys in here
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  });
    //search for 10 tweets containing lolcats
    client.get('search/tweets', {q: 'lolcats' , count: '10'}, function(error, tweets){

        var json = [];
        for (var i =0; i< tweets.statuses.length ; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }

        response.end(JSON.stringify(json));
    });
}).listen(port);


