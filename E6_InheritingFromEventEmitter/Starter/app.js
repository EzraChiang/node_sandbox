var EventEmitter = require("events");
var util = require("util");

function Greetr() {
  this.greeting = "Hello World";
}

util.inherits(Greetr, EventEmitter);
//any new instances of Greetr will inherit the properties of EventEmitter,
//you can also add custom properties to Greetr

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}
var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
//many objects built in node are inherited from the EventEmitter
