// Callback hell
const run = () => {
    console.log("Development");    
}
run();

setTimeout(() => {
    console.log("Printed after 2 second delay");   
    setTimeout(() => {
        console.log("Printed after 3 seconds delay");        
    }, 3000) ;
}, 2000);

// Promises
const voteEligibility = false;

const check = new Promise((resolve, reject) => {
    if(voteEligibility){
        resolve("User is eligible for vote");
    }else{
        reject("User is not eligible for vote");
    }
});
check.then((message) => {
    console.log(message);    
}).catch((err) => {
    console.error(err);    
})

// DOM
function changeTitle(){
    const permission = document.getElementById("permission");
    permission.innerText = "File deleted;"
}

// Events
document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("downloadButton");
    const message = document.getElementById("message");

    // Click event
    button.addEventListener("click", function(){
        message.innerText = "Downloading...";
    })
})

// onChange example

function displayData(){
    const input = document.getElementById("username").value;
    const output = document.getElementById("output");
    output.innerText = input;
}

// Asynchronous javascript - (fetch, async & await, try & catch)

async function apiFunction(){
    console.log("API Function");
    
    // Error handling
    try{
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error("API Error");
        }
        const data = await response.json();
        console.log(data);     
        apiData(data);   
    }catch(err){
        console.error(err);        
    }
};

function apiData(data){
    const productsContainer = document.getElementById("products-container");

    data.forEach(product => {
        const cardDiv = document.createElement('div');

        const titleElement = document.createElement("h1");
        titleElement.textContent = product.title;

        cardDiv.appendChild(titleElement);

        productsContainer.appendChild(cardDiv);
    })
}
apiFunction();


// Array methods

// forEach
const fruits = ['apple', 'cherry', 'banana'];
fruits.forEach(fruit => {
    console.log(fruit);    
});

// map
const price = [34, 99, 2500];
const output = price.map(gst => gst * 1.20);
console.log(output);

// filter
const products = [
    {id: 1, category: 'electronics', name: "bulb"},
    {id: 2, category: 'groceries', name: 'vegetables'},
    {id: 3, category: 'electronics', name: 'charger'}
]

const filteredProducts = products.filter(product => {
    return product.category === 'electronics';
});

console.log(filteredProducts);

// reduce
const cartProducts = [500, 300, 1000];
const grandTotal = cartProducts.reduce((currentValue, nextValue) => {
    return currentValue + nextValue;
});
console.log(grandTotal);

// sort
const numbers = [55, 1, 8, 3, 7, 2, 94, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);

function bill(customerName, ...products){
    console.log("Customer name:- ", customerName);
    console.log("Purchased products:-", products);        
}
bill("narasimhan", "apple", 'charger', 'mobile');