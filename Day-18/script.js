// Operators & Expressions

// Arithmetic operator

let num1 = 25;
let num2 = 30;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Assignment operator

let a = 5;
// pre increment
// a += 5; a = a + 5
// post increment
// a =+ 6; a = 6
a =- 3;
console.log(a);

// Comparison operator

let previousRate = 345;
let currentRate = "345";

console.log(previousRate > currentRate); // Greaterthan operator
console.log(previousRate < currentRate); // Lesserthan operator

// First method to check equal values
console.log(previousRate >= currentRate); // Greaterthan or equal to operator

// Second method to check equal values
console.log(previousRate <= currentRate); // Lesserthan or equal to operator

// Third method to check equal values
console.log("Equal to operator", previousRate == currentRate); // Double equal to operator

console.log(previousRate === currentRate); // Triple equal to operator

// Ternary operator

let accessToken = false;
accessToken ? console.log("Access granted") : 
console.log("Access denied");

let i = 10;
let j = 20;
let result = i > j ? console.log("I is greater than J") : 
console.log("J is greater than I");

// Expression
// String concatenation
let firstName = "Lakshmi";
let lastName = "Narasimhan";
console.log(firstName);
console.log(lastName);
console.log(firstName + " " +lastName);
console.log(firstName, lastName);

// Expression interview problem

let k = 5; // number
let l = "5"; // string
let m = 6; // number
console.log(k + l + m); // 556
console.log(k - l - m); // -6

// Practical example code for ternary operator
// Scenario: Eligibility checking for vote

let age = 18;
let eligibility = age >= 18 ? console.log("Eligible for vote") : 
console.log("Not eligible for vote");








