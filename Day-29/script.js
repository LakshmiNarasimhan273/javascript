// Array methods

// 1) forEach
const companies = ['Entri', 'Google', 'Zoho'];
companies.forEach(company => {
    console.log(company);
})
// Use Case:- Displaying usernames in a dashboard UI.

// 2) map ** Important method for React development
const price = [100, 200, 300];
// applly a map method into an price array, it will take the
// each value from the array and complete the process
// once the process is done it will return the output in new array
const gstPrice = price.map(gst => gst * 1.20);
console.log(gstPrice);
// Use case:- price transforming with tax applied

// 3) filter ** Important for both react & node development
const products = [
    {id: 1, name: 'Laptop', price: 5000},
    {id: 1, name: 'notebook', price: 50},
    {id: 1, name: 'stationary product', price: 200}
];

const filterProducts = products.filter(product => {
    return product.price < 500;
});
console.log(filterProducts);
// Use case:- Print only the filtered products

// 4) find
const users = [
    {id: 1, role: 'admin'},
    {id: 2, role: 'developer'}
];
const searchAdmin = users.find(user => {
    return user.role === "admin";
});
console.log(searchAdmin);
// Use case:- Find a specific need into an array of object

// 5) reduce  ** Important for interview
const value = [100, 200, 300];
const total = value.reduce((a, b) => a + b);
console.log(total);
// Use case:- Adding a total price in a shopping cart

// 6) some
const tasks = [
    {id: 1, task: "Development", completed: true},
    {id: 2, task: "Deployment", completed: false}
];
const pendingTask = tasks.some(task => !task.completed);
console.log(pendingTask);
// Use case:- Find a pending task from tasks array

// 7) every
const scores = [65, 76, 77];
const passingScores = scores.every(score => score >= 70);
console.log(passingScores);
// Use case:- Validate all test scores.

// 8) includes  ** important for development stage
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('jackfruit'));
// Use case:- Direct content filtering

// 9) sort ** Important for interview and development stage
const randomNumbers = [34, 62, 3, 1, 97, 2];
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);
// Use case:- Order every array elements

// 10) pop - it's removes the last element
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);

// push - adding a new element at the last
numbers.push(8);
console.log(numbers);

// shift - removes the first element
numbers.shift();
console.log(numbers);

// unshift - add a new element to the first
numbers.unshift(500);
console.log(numbers);

// Real-time example using API with filter function
fetch("https://fakestoreapi.com/products").then(response => {
    if(!response.ok){
        throw new Error("API Fetching error");
    }
    return response.json();
}).then(product => {
    const filteredProducts = product.filter(data => data.price > 50)
    console.log(filteredProducts)
}).catch(err => console.error(err)
);


