/*
04. THIS

When a method is called as a property of object, then “this” refers to the parent object. When a function is called with “new” operator then “this” refers to the newly created instance.
*/

// Example 1

var balanceInfo = {
  money: 100,
  interestAmount: 20.50,
  owner: 'Param mittal',
  getTotal: function() {
    return this.money + this.interestAmount;
  }
};

console.log(balanceInfo.money);
console.log(balanceInfo.getTotal());


//  Example 2

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName();
// let person2 = new Person("Paul", "Adams");
// person2.displayName();

/*
To know in detail

https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

Video 

https://www.youtube.com/watch?v=GhbhD1HR5vk

*/
