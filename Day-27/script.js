// Callback hell

// console.log(1);

// function run(){
//     console.log(2);
// }
// console.log(3);
// run();

// setTimeout

// setTimeout(() => {
//     console.log("Function running");
// }, 5000);

// First console without any time delay
// console.log(1);

// setTimeout function with 4 seconds delay time
// so that arrow function will return the output
// after the time delay is done
// setTimeout(() => {
//     console.log(2);
// }, 4000);

// Last console without any time delay
// console.log(3);

// console.log("Process start");

// This small piece of code takes 24 function 
// memory to execute this example
// setTimeout(() => {
//     console.log("Step - 1");

//     setTimeout(() => {
//         console.log("Step - 2");
//     }, 2000)
    
// }, 1000)

// Promises

// intial variable with boolean value
const userAuthentication = false;

// Promise function with 2 main parameters resolve & reject
const checkUser = new Promise((resolve, reject) => {
    // Condition to check the variable is true or not
    if(userAuthentication){
        // if true message should be passed to the resolve parameter
        resolve("User is authenticated");
    }else{
        // if condition is false message should pass to the reject parameter
        reject("User authentication failed");
    }
})

// then will always track the resolve, when the condition is true it will 
// print the resolve message
checkUser.then((message) => {
    console.log(message);    
}).catch((error) => {
    // catch block always track the reject parameter if the condition
    // seems to be failed it will print the reject value
    console.error(error);    
});