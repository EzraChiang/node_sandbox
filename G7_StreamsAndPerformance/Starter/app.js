var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);
    //use streams to improve performance!!!
}).listen(1337, '127.0.0.1');