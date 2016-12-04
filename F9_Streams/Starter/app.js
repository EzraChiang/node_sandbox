//Chunk, a piece of data being sent through a stream. Data is split into streams.
//streams are event emitters
//abstract (base) class: A type of constructor you never work directly with, but inherit from.
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
// event emitted from the readstream is 'data'
//pass the data that was in the buffer 'chunk'
readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});
