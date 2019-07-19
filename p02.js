/*
 02. IIFE
Immediately invoked functions expressions

A function expression that’s immediately invoked after it’s created. That’s a function that died immediately after it came to life.
*/

// Example 1

let  a = 9;
console.log(a);

((a) => {
  console.log(a);
})(4);

console.log(a);



// Example 2

// let sumOfTwo = ((a,b) => {
//   console.log(a+b);
// })(2,5);


/*
More info

https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6

*/