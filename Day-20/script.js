// Function

// Function syntax
function welcome(){
    // function body
    console.log("Welcome to javascript");
}

welcome();

// Syntax destructure
// function - keyword
// welcome - function name
// () - parameter
// return statement - outputs
// callback - welcome()
// arguments - welcome() need to enter along with callback

// Function Parameter & Arguments

let a = 5;
let b = 5;
let c = 10;

function add(n1, n2, n3){
    console.log(n1 + n2 + n3);
    // return n1 + n2 + n3;
}

add(a, b, c);
// console.log(add(a, b, c));

// Multiple functions - Helper function

function child(){
    console.log("Child function executed");
}

function parent(){
    console.log("Parent function executed");
    child();
}

parent();

// Nested function

function authentication(){
    console.log("User credentials matched");
    
    function authMessage(){
        console.log("Welcome user");
    }
    authMessage();
}

authentication();

// Nested function with secured authentication

function loginVerifier(userData){ // parent function
    function checkPassword(inputPassword){ // child function
        // return statement for child function
        // userData.password - user object password(1234)
        // inputPassword - value receives from argument
        return userData.password === inputPassword;
    }
    // return statement for parent function
    return checkPassword;
}

// main object
const user = {
    username: "admin",
    password: "1234"
}

// parent function callback with argument
const verifyUser = loginVerifier(user);
// passign a value to the child function using
// verifyUser variable
console.log(verifyUser("123"));

// Function currying

function test(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const result = test(10)(10)(10);
console.log(result);
