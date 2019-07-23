/*
05. HOISTING

Variables and functions are hoisted to the top of the scope that they are declared in.

This scope is of two types (Global, Functional) for 'var' data types and of three types (Global, Functional, BLOCKED) for 'let' and 'const' data type.

Variables with let and const are hoisted to their nearest Global/Functional/BLOCKED scope.
*/

// Example 1

function getTotal() {
  
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}

getTotal();

/*
After hoisting, Compiler sees the above function like this - 

function getTotal() {
  let total;
  var multiplier;

  //console.log(multiplier); 
  //Outputs: undefined

  //console.log(total);
  // Error you cannot access undeined let or const variables in contrast to var variables
  
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd;
    
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}

getTotal();
*/

/*
To know in detail

https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

Video 

https://www.youtube.com/watch?v=Nt-qa_LlUH0

*/
