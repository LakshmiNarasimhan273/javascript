// Slice method - shallow copy
const products = ['laptop', 'mouse', 'chair', 'table'];
console.log(products);
const removedProducts = products.slice(0, 2);
console.log(removedProducts);
// Use case:- Student grading system

// splice  ** Important for interview and development(backend)
const cartProducts = ['mobile', 'tablet', 'monitor', 'keyboard'];
console.log("Actual array", cartProducts);

const spliceMethod = cartProducts.splice(1, 2);
console.log("Removed products",spliceMethod);
console.log("Updated products",cartProducts);

// splice insertion
const userRole = ['admin', 'user']; // super-admin
userRole.splice(1, 0, "super-admin");
console.log(userRole);

// Spread operator  ** Important for interview and react development
// 1) Merging two arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const mergedArray = [...b, ...a];
console.log(mergedArray);

// 2) Merging two objects
const existingUser = {
    name: 'narasimhan',
    role: 'user',
    email: 'narasimhan@mail.in'
}; 

const updatedFields = {
    role: 'admin',
    email: 'narasimhan@outlook.in'
}

// using a sperad operator to merge 2 different objects, with in this
// we have a similar same keys in object so that spread operator will partially 
// update the value based on our object datas
const result = {...existingUser, ...updatedFields};
console.log(result);

// Rest operator  ** Important for development (used in cart logic)
// mostly used in react development
// Ticket supporting system -- Amazon, Cognizant
function createTicket(username, issueTitle, ...details){
    console.log(`Employee username: ${username}`);
    console.log(`Issue:- ${issueTitle}`);
    console.log(`Issue details:-`, details);  
}

createTicket("narasimhan", "login failed", "can't able to login", "having a stable network but not logged in", "having a important task to complete");

// 2 parameters variables, 1 with rest operator
function bill(customerName, ...products){
    console.log(`Customer name:- ${customerName}`);
    console.log(`Products:- `, products);
    
};
// narasimhan value goes to the customerName parameter variable, and remaining values
// will be taken by the rest opertor and add all of them into a new array
bill("Narasimhan", "apple", "banana", "cool drinks", "bread", "chips");

// Data structure problem
// Scenario:- Adding two array 
// Use case:- Intially we have 2 different arrays and we need to merge and all the
// array elements by one by one and return a single output value
// array1 = [3, 5, 2] | array2 = [7, 2, 1] | [3, 5, 2, 7, 2, 1] = 20
let array1 = [3, 5, 2];
let array2 = [7, 2, 1];

function addArrays(array1, array2){
    // Merge 2 arrays using spread operators
    let mergedArray = [...array1, ...array2];
    console.log("Merged array", mergedArray);

    // using reduce function to find the total sum of all array elements
    let addValues = mergedArray.reduce((currentValue, nextValue) => {
        // return the added value
        return currentValue + nextValue;
    });
    return addValues;
}
console.log(addArrays(array1, array2));
