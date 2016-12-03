//Buffer is global node.js doesn't even have to go look
//must give params, 'utf8' is the default
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
