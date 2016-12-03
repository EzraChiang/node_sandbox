//this is story 8 bytes of data, 64 bits, new feature in javascript v8 engine.
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
console.log(view);
