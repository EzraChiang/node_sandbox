'use strict';

// var EventEmitter = require('events');
var util = require('util');
var Greetr = require('./greetr');
//specify extends
// class Greetr extends EventEmitter {
// 	constructor() {
// 		//super() makes sure that EventEmitter is called
// 		super();
// 		this.greeting = 'Hello World!';
// 	}
//
// 	greet(data) {
// 		console.log(`${ this.greeting }: ${ data }`);
// 		this.emit('greet', data);
// 	}
// }
// function Greetr() {
// 	EventEmitter.call(this);
// 	this.greeting = 'Hello world!';
// }
//
// util.inherits(Greetr, EventEmitter);
//
// Greetr.prototype.greet = function(data) {
// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet', data);
// }

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
