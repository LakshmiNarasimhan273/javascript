const Product = require("../model/ProductModel");

// POST API - CREATE
const createProduct = async (req, res) => {
    const { productTitle, productDescription, productPrice, discount, productSize, productReview } = req.body;

    try{
        if(!productTitle || !productDescription || !productPrice){
            return res.status(400).json({message: "Please fill up the required fields"});
        }

        const newProduct = new Product({productTitle, productDescription, productPrice, discount, productSize, productReview});
        await newProduct.save();
        res.status(201).json({message: "Product added", newProduct});
    }catch(err){
        res.status(500).json({message: "Product creation failed"});
    }
}

// GET API - READ
const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message: "Products fetching failed"});
    }
}

// GET BY ID API - READ A SPECIFIC RECORD
const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: "Product fetching failed"});
    }
}

// EDIT API - UPDATE
const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({message: "Product updated", updatedProduct});
    }catch(err){
        res.status(500).json({message: "Product updation failed"});
    }
}

// DELETE API
const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted"});
    }catch(err){
        res.status(500).json({message: "Product deletion failed"});
    }
}

module.exports = {createProduct, getProducts, getProductById, updateProduct, deleteProduct};