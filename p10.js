/*
04. A BONUS CONCEPT

*/

// Example 1

(function() {
  var x = y = 200;
})();

console.log('y: ', y);
console.log('x: ', x);

/*
What actually happens :

(function() {
  y = 200; 
  
  // Globally declaration (when let/var/const is not used).

  var x = y;

  // Local declaration to the IIFE function.

})();

console.log('y: ', y);
console.log('x: ', x);
*/
