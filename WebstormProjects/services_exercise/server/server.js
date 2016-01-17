var express = require('express');
var app = express();

app.use(express.static("server/public"));

app.get('/', function(request, response){
   response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function(request, response){
   var port = server.address().port;
    console.log('Listening on port', port);
});



//app.get('/getMyThing', function(request, response){
//    var myThing = [{thing1: 'thing1'}, {thing2: 'thing2'}];
//    response.send(myThing);
//
//});