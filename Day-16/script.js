// var, let & const

var name = 24;  // Global scope
console.log(name);
var name = 48;
console.log(name);


let age = 30;  // Block scope
console.log(age);
age = 60;
console.log(age);

const role = "Mentor";  // Constant scope
console.log("Working as a Fullstack", role);

// Hoisting Concept

console.log(result);
var result = "pass";

// Task - Adding two numbers

let a = 50;
let b = 50;
// Basic method
let c = a + b;
// Second method
console.log("The total value of a & b is - ", a + b);
// The total valoe of a and b is - 100