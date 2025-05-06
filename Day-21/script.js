// Arrow function and callbacks

// Normal function
function welcome(){
    console.log("Welcome to javascript");
}

welcome();

// Arrow function syntax
const greet = () => {
    console.log("Welcome to javascript");
};
greet();

// Parameter & Arguments in arrow function

const welcomeUser = (name) => {
    // String literals
    return `Welcome back ${name}`;
}
console.log(welcomeUser("Narasimhan"));

// Simplified arrow function
const greetUser = name => `Hello ${name}`;
console.log(greetUser("Entri user"));

// Callbacks
function username(name){
    console.log(`Hi, ${name}`);
}

function processUser(callback){ // callback keyword
    const name = "Entri.app";
    callback(name); // syntax for callbacks
}

processUser(username); // passing another function to callback variable

// function add(a, b){
//     return a + b;
// }

// console.log(add(5, 4));

const add = (a, b) => a + b;
console.log(add(10, 10));

// Password validator in arrow function with
// Function currying concept

const checkPassword = (username) => {
    return (password) => {
        if(password === "admin123"){
             console.log(`Welcome ${username}! You are logged in`);
        }else{
            // console error new method of console statement
             console.error(`Login failed: Password mismatch`);
        }
    }
}
checkPassword("Narasimhan")("admin1235");

console.log();
console.error();
console.table();
// Important console statement
console.debug();



