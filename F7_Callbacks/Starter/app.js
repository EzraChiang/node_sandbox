function greet(callback) {
  console.log('hello');
  //we expect the callback to be a function so that when we are done console logging 'hello', we invoke the callback
  var data = {
    firstname: "John Doe"
  };
  callback(data);
}

greet(function(data) {
  console.log('the callback was invoked!');
  console.log(data);
});

greet(function(data) {
  console.log('a different callback was invoked!');
  console.log(data.name);
});
