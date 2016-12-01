var obj = {
  greet: "Hello"
};

console.log(obj.greet);
console.log(obj["greet"]);
var prop = "greet"
console.log(obj[prop]);

var arr = [];

arr.push(function(){
  console.log("Hello World");
});

arr.push(function(){
  console.log("Hello World 1");
});

arr.push(function(){
  console.log("Hello World 2");
});

arr.forEach(function(item){
  item();
});

console.log(arr[1]);
