// API
// Inbuild function for fetching api link
fetch("https://fakestoreapi.com/products?limit=8").then(response => {
    // if condition for checking the response data, if something gets wrong it will
    // throw the Error
    if(!response.ok){
        throw new Error("API Fetching error");
    }
    // Else the response parameter convert into a json structure
    return response.json();
    // Second then block for processing the api data using console
}).then(data => {
    console.log("Product data", data);    
    // Catch block to find if any errors occurs when making a API request
}).catch(error => {
    console.error(error);
});