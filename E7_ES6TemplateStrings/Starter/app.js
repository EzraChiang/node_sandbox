//Template literal, a way to concatenate strings in ES6 easier to concatenate strings with a lot of +'s
var name = 'John Doe';

var greet = 'Hello ' + name;
var greet2 = `Hello ${ name }`;

console.log(greet);
console.log(greet2);
