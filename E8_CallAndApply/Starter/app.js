var obj = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
obj.greet.call( { name: 'Jane Doe' });
obj.greet.apply( { name: 'Jane Doe' });

//.call and .apply changes what 'this' points to.
//difference between .call is that if your function has params, write it like
// obj.greet.call( { name: 'Jane Doe', params }); as a list
// obj.greet.call( { name: 'Jane Doe', [params] }); as an array list.
