
/*
 01. Currying
Immediately invoked functions expressions

Currying is a process to reduce functions of more than one argument to functions of one argument with the help of lambda calculus.
*/

// Example 

let tripleAdd = a => b => c => a+b+c;
console.log(tripleAdd(1)(2)(3));


/*
More info

https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

*/