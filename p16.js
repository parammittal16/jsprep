/*
04. WAYS TO CREATE OBJECTS

OBJECTS are one of the most important part of javaScript. Following are the three popular methods to create object in javaScript.

*/

// Method 1 (Object literal syntax)

const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};

console.log("\nMethod 1's Output:\n");
console.log(myBoat);


// Method 2 (New keyword & Object constructor)

// const student = new Object();

// student.grade = 12;
// student.gradePointAverage = 3.7;
// student.classes = ["English", "Algebra", "Chemistry"];
// student.getClasses = function() {
//   return this.classes;
// };

// console.log("\nMethod 2's Output:\n");
// console.log(student);


// Method 3 (Constructor function)

// function Car(color, brand, year) {
//   this.color = color;
//   this.brand = brand;
//   this.year = year;
// }

// Car.prototype.getColor = function() {
//   return this.color;
// };

// const carlysCar = new Car('blue', 'ferarri', 2015);
// const jimsCar = new Car('red', 'tesla', 2014);

// console.log("\nMethod 2's Output:\n");
// console.log(carlysCar.getColor());
// console.log(jimsCar);

/*
To know in detail

https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12

Video 

https://www.youtube.com/watch?v=-P04pE6zRNE

*/