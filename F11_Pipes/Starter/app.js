var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
//files are a particular stream, we can stream a chunk of data to anything that is a string.
//creates a transformed stream.
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();


//method chaining: A method returns an object so we can keep calling methods.
readable.pipe(writable);

//read from text file, compress it, and write to a compressed stream.
readable.pipe(gzip).pipe(compressed);
