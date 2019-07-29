/*
04. PRIMITIVE vs REFRENCES TYPES

Variables that are assigned a primitive value are given a separate copy of that value.(Example 1)

Variables that are assigned a non-primitive value are given a reference to that value. 
That reference points to the object’s location in memory. The variables don’t actually contain the value.(Example 2)

*/

// Example 1

let name1 = "PARAM";
let name2 = name1;

console.log("\nExample 1's Output:\n");

name2 = "VISHAL";

console.log("Name 1", name1);
console.log("Name 2", name2);

// Example 2

const list1 = [1,2,3,4];
const list2 = list1;

console.log("\nExample 2's Output:\n");

list1.push(5,6,7);

console.log("list 1 :", list1);
console.log("list 2 :", list2);

// Now, How to create lists with same elements as in list1 but without referencing list1 ?. See below Example.

// Example 3

// const list1 = [1,2,3,4];
// const list2 = list1.slice();
// // OR
// const list3 = list1.concat([]);
// // OR
// const list4 = [];
// list4.push(...list1);

// list1.push(5,6,7);

// console.log("\nExample 3's Output:\n");
// console.log("list 1 :", list1);
// console.log("list 2 :", list2);
// console.log("list 3 :", list3);
// console.log("list 4 :", list4);


/*
To know in detail

https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

Video 

https://www.youtube.com/watch?v=9ooYYRLdg_g

*/