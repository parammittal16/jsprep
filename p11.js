/*
04. CALL AND APPLY METHODS

 The call() nd apply() methods calls a function with a given "this" value and arguments provided individually.
*/

// Example 1

const car1 = {
  brand: 'Porsche',
  getCarInfo: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};

const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Ford'
};

console.log("\nExample 1's Output:\n");
console.log(car1.getCarInfo(30000, 2000, "Red"));
console.log(car1.getCarInfo.call(car2, 40000, 2002, "Blue"));
console.log(car1.getCarInfo.apply(car3, [50000, 1995, "Black"]));

/*
Note:
 Lambda functions (arrow functions) doesn't create new functional context and use context of a calling function.
 So "this" refers to a parent context. If there's no 'num' variable than it's undefined.
*/

// Example 2

// let obj1 = {num: 10};
// let obj2 = {num: 8};
// let sumWith = (a, b) => {
//   console.log("this.num: ", this.num);
//   return this.num + a + b;
// }
// console.log("\nExample 2's Output:\n");

// console.log("Obj1 result: ", sumWith.call(obj1, 1, 2));
// console.log("Obj2 result: ", sumWith.apply(obj2, [2, 5]));


//Hence do not use call, apply with => functions.

/*
To know in detail

https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb

Video 

https://www.youtube.com/watch?v=c0mLRpw-9rI

*/
