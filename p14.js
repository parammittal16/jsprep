/*
04. JSON

 JSON stands for JavaScript Object Notation.
 JSON is a lightweight data interchange format.
 JSON is language independent *.
 JSON is "self-describing" and easy to understand both for humans and computers.
*/

/*
TASK:
1. Describe what JSON format is.
2. Delete the data types not permitted in JSON.
3. Replace placeholder-text with the corresponding data type,
   properly formatted as JSON.
*/

// const myJsonObj = {
//   myString: [some string],
//   myNumber: [some number],
//   myNull: [null],
//   myBoolean: [false],
//   myUndefined: [undefined],
//   myArray: [some array],
//   myFunction: [some function],
//   myObject: [some object]
// };

/* 
Solution:
 1.First of all wrap all properties names in "" as per standards of JSON.
 2. JSON will not allow having a property whose value id either undefined or a function, so remove them.
 3. Fill values of properties accordingly. 

*/

const myJsonObj = {
  "myString": "Param Mittal",
  "myNumber": 16,
  "myNull": null,
  "myBoolean": true,
  "myArray": [16, 11 , 1997],
  "myObject": {
    "firstName": "Param",
    "lastName": "Mittal"
  }
};
console.log(myJsonObj);

/*
To know in detail

https://medium.com/@timothyrobards/understanding-json-in-javascript-5098876d0915

Video 

https://www.youtube.com/watch?v=wI1CWzNtE-M

*/