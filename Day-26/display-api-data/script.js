// Main function for fetching data from API
async function fetApidata(){
    // Error handling
    try{
        const response =  await fetch("https://fakestoreapi.com/products?limit=4");
        if(!response.ok){
            throw new Error("API Error");
        }
        const products = await response.json();
        displayData(products);
    }catch(error){
        console.error(error);
    }
}

// DOM function for displaying API data
function displayData(products){
    const productContainer = document.getElementById("products-container");

    products.forEach(data => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const titleElement = document.createElement("h2");
        titleElement.classList.add("product-title");
        titleElement.textContent = data.title;

        const imageElement = document.createElement('img');
        imageElement.classList.add('product-image');
        imageElement.src = data.image;
        imageElement.alt = data.title

        productCard.appendChild(titleElement);
        productCard.appendChild(imageElement);
        productContainer.appendChild(productCard);

    })
}

fetApidata();