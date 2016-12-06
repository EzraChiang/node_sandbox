angular.module('TestApp', []);

angular.module('TestApp')
  .controller('MainController', cntrlFunc);

function cntrlFunc() {
  this.message = 'Hello World';

  this.people = [
    {
      name: 'John Doe'
    },
    {
      name: 'Jane Doe'
    },
    {
      name: 'Jim Doe'
    }
  ]
}
