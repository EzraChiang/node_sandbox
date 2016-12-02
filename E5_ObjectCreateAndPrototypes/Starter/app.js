var person = {
  firstname: "",
  lastname: "",
  greet: function() {
    return this.firstname + " " + this.lastname;
  }
}


// set up inheritance, the prototype chain. this is key to understanding the event emitter
var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

var jane = Object.create(person);
jane.firstname = "Jane";
jane.lastname = "Doe";

console.log(john.greet());
console.log(jane.greet());
