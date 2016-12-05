//require function and getting it from the node.js core
var http = require('http');

//creating an object and getting a callback, that is turned into an event listener
http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Hello world\n');

}).listen(3000, '127.0.0.1');
