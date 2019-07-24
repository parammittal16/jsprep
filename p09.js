/*
04. COUNTING FUNCTION

The easiest way to explain how to do this is with an example. In the following example 1, the function is called "myFunc" and it has a static variable called "counter" (can have any name not builtin). 

*/

// Example 1

let myFunc = () => {
  if(typeof myFunc.counter == 'undefined')
    myFunc.counter = 1;
  else myFunc.counter++;
  return myFunc.counter;
}

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());

// There is also a second way to do this.

// Example 2

// let myFunc = () => {
//   let count = 1;
//   return () => {
//     return count++;
//   }
// }
// let myFuncInstance = myFunc();
// console.log(myFuncInstance());
// console.log(myFuncInstance());
// console.log(myFuncInstance());


/*
To know in detail

https://www.electrictoolbox.com/javascript-static-variables/

Video 

https://www.youtube.com/watch?v=w1s9PgtEoJs

*/
