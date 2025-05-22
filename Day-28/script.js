async function fetchUsers(){
 try{
    const response = await fetch("https://fakestoreapi.com/users"); 
    if(!response.ok){
        throw new Error("API Error");
    }
    const userData = await response.json();
    renderUsers(userData);
 }   catch(error){
    console.error(error);    
 }
}

function renderUsers(users){
    const userContainer = document.getElementById("userContainer");
    users.forEach(data => {
        // Create a new div for user data
        const userDiv = document.createElement("div");
        // Add a className for this created div, by using className property (updated property)
        userDiv.className = "card";
        // innerHTML propert is used to create a dynamic html tags 
        // using a dollar sign with curly braces to destructure the api data (literals concept)
        userDiv.innerHTML = `
        <h3>${data.username}</h3>
        <p>${data.email}</p>
        `;
        // append this newly created div into our main div userContainer
        userContainer.appendChild(userDiv);
    })
}

async function fetchProducts(){
   try{
    const response = await fetch("https://fakestoreapi.com/products");
    if(!response.ok){
        throw new Error("API Error")
    }
    const productData = await response.json();
    renderProducts(productData)
   } catch(error){
    console.error(error);
   }
}

function renderProducts(products){
    const productContainer = document.getElementById("productContainer");
    products.forEach(data => {
        const productDiv = document.createElement("div");
        productDiv.className = "card";
        productDiv.innerHTML = `
        <img src="${data.image}" />
            <h3>${data.title}</h3>
            <p>${data.price}</p>
            <button>Add to cart</button>
            <button>Buy now</button>
        `;
        productContainer.appendChild(productDiv);
    })
}