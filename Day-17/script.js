// Data types

// Primitive data type
// String, number, boolean, undefined, null, bigint

// Non-primitive data type
// Object, function, Array

// String
let name = "Narasimhan";
console.log(typeof name);

// Number
let age = 28;
console.log(typeof age);

// Boolean
let eligiblePerson = false;
console.log(typeof eligiblePerson);

// Undefined
let salary;
console.log(typeof salary);

// null
let increment = null;
console.log(typeof increment);

// BigInt
let bigNumber = 1234n;
console.log(typeof bigNumber);

// Non-Primitive data type
console.log("Non-Primitive data types");

// Object
let user = {
    // key: value
    id: 1,
    username: "Narasimhan",
    role: "Mentor"
}

console.log(typeof user);

// Function
function welcome(){
    console.log("Welcome to Javascript");
}
console.log(typeof welcome);

// Array
let learners = ["Surya", "Aravindh", "Karthikeyan", "Deepak"];
console.log(Array.isArray(learners));

// Advance level of data processing

// Object
let product = {
    productId: 12145, // number
    productName: "Sports shoe", // string
    stockAvailability: true, // boolean
    size: undefined, // undefined
    colors: ["Green", "Black", "Red", "Slate"], // Array
    offers: function(){ // Function
        console.log("10% offers available");
    },
};

console.log(product);
product.offers();

// Array of object
let employees = [
    {
        id: 1,
        name: "narasimhan",
        role: "mentor"
    },

    {
        id: 2,
        name: "aravindh",
        role: "developer"
    },

    {
        id: 3,
        name: "deepak",
        role: "developer"
    }
]

console.log(employees);
console.log(employees[1]);
