var fs = require('fs');

//read binary data from out operating system.
//first paramater is the path, second parameter is the encoding
//loads content of file into a buffer
//problem with this is that it is synchronous, users will have to wait
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// to solve this
//standard practice for a callback is to put err object first.
//this method is asynchronous.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('done');

//the order is hello world, done hello world. This is the asynchronous power.
//make your applications more performant. Seem faster.
