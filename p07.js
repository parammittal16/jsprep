/*
07. == vs === (Equals vs Strict equals)

== Only check for abstract equality and does not test for data type whereas === Tests for data type.

What happens "under the hood" when using "==" to compare:

# Comparing number & string

1.String is converted to a number.
2.Comparison is made.

# Comparing boolean & non-boolean

1.Non-boolean is converted to a boolean. 2.Comparison is made.

# Comparing object & primitive data-type

1.object is converted to primitive data-type 2.comparison is made
*/

// Example 1

console.log(7 == '7');  // true

console.log(7 === '7');  // false

/*
To know in detail

https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript

Video 

https://www.youtube.com/watch?v=I0EZNZgJE28

*/


