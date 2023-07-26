// Create web server that can accept any request to localhost:3000
// and respond with the contents of comments.json

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log('Responding to a request.');
  response.writeHead(200, {'Content-Type': 'application/json'});
  // var myObj = {
  //   name: 'Ryu',
  //   job: 'Ninja',
  //   age: 29
  // };
  // response.end(JSON.stringify(myObj));
  var myReadStream = fs.createReadStream(__dirname + '/comments.json', 'utf8');
  myReadStream.pipe(response);
});

server.listen(3000);