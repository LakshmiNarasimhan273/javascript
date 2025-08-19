const productModel = require("../model/productModel");

// GET ALL PRODUCTS
const getallProducts = (req, res) => {
    res.status(200).json(productModel);
}

// GET PRODUCT BY ID
const getproductbyId = (req, res) => {
    const id = parseInt(req.params.id);
    const product = productModel.find(data => data.id === id);

    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json({message: "Product not found"});
    }
}

// CREATE A NEW PRODUCT
const createProduct = (req, res) => {
    const {title, price, stockAvailable} = req.body;

    // validation for input fields
    if(!title || !price || !stockAvailable){
        return res.status(400).json({message: "All fields are required"});
    }

    const newProduct = {
        id: productModel.length ? productModel[productModel.length - 1].id + 1 : 1,
        title,
        price,
        stockAvailable
    };
    productModel.push(newProduct);
    res.status(201).json(newProduct);
}

// UPDATE AN EXISTING PRODUCT
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, price, stockAvailable} = req.body;
    const product = productModel.find(data => data.id === id);

    if(product){
        product.title = title ?? product.title;
        product.price = price ?? product.price;
        product.stockAvailable = stockAvailable ?? product.stockAvailable;

        res.status(200).json({message: "Product updated"});
    }else{
        res.status(404).json({message: "Product not found"})
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
        res.status(404).json({message: "Product not found"})
    }
}

module.exports = {getallProducts, getproductbyId, createProduct, updateProduct, deleteProduct};