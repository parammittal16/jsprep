/*
04. A BONUS CONCEPT

What if we have to make a function that could return result for func((x)(y)) [currying] and
func(x,y) [normal] ? Think about it
Solution below :
*/

// Example 1 (Old School Method)

function getTotal() {
  var args = Array.prototype.slice.call(arguments);
  
  if (args.length === 2) {
    return args[0] + args[1];
  }
  else if (args.length === 1) {
    return function(num2) {
      return args[0] + num2;
    };
  }
}
console.log("\nExample 1's Output:\n");
console.log(getTotal(10, 20));
console.log(getTotal(5, 40));
console.log(getTotal(3)(30));
console.log(getTotal(8)(12));

// Example 2 (Basic Method)

// const outerFunction = (a,b) => {
//   if(typeof(b) == "undefined"){
//     return (c) => {
//       return a + c;
//     }
//   }
//   else return a + b;
// }

// console.log("\nExample 2's Output:\n");
// console.log(outerFunction(5,4));
// console.log(outerFunction(5)(4));

// Example 3 (Latest Method)

// const outerFunction = (...args) => {
//   if(args.length == 1) {
//     return (c) => args[0] + c;
//   }
//   else {
//     return args.reduce((sum, ele) => {
//       return sum  + ele;
//     });
//   }
// }

// console.log("\nExample 3's Output:\n");
// console.log(outerFunction(5,4));
// console.log(outerFunction(5)(4));
