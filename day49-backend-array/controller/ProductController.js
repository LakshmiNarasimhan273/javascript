const productModel = require("../model/ProductModel");

// const productId = (id) => {
//     productModel.find(data => data.id === id);
// }

// GET ALL PRODUCTS
const allProducts = (req, res) => {
    res.status(200).json(productModel);
};

// CREATE PRODUCT
const createProduct = (req, res) => {
    const {title, price, description} = req.body;

    if(!title || !price || !description){
        return res.status(400).json({message: "All fields are required"});
    }


    const newProduct = {
        id: productModel.length ? productModel[productModel.length - 1].id + 1 : 1,
        title,
        price,
        description
    };
    productModel.push(newProduct);
    res.status(201).json({message: "Product added"});
}

// EDIT PRODUCT
const editProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, price, description} = req.body;

    const productData = productModel.find(data => data.id === id);
    // const productData = productId(id);

    if(productData){
        productData.title = title ?? productData.title;
        productData.price = price ?? productData.price;
        productData.description = description ?? productData.description;
        res.status(200).json({message: "Product updated"});
    }else{
        res.status(404).json({message: "Selected product not found"});
    }
}

// DELETE PRODUCT
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = productModel.findIndex(data => data.id === id);

    if(productIndex !== -1){
        const deletedProduct = productModel.splice(productIndex, 1);
        res.status(200).json({message: "Product deleted"});
    }else{
        res.status(404).json({message: "Selected product not found"});
    }
}

module.exports = {allProducts, createProduct, editProduct, deleteProduct};