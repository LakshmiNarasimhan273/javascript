const Product = require("../model/ProductModel");

// POST API
const createProduct = async (req, res) => {
    const { productTitle, productDescription, productPrice, discount, productSize, productReview } = req.body;
    try {
        if (!productTitle || !productDescription || !productPrice) {
            return res.status(400).json({ message: "Title, Description & Price fields are mandatory" });
        }
        const newProduct = new Product({ productTitle, productDescription, productPrice, discount, productSize, productReview });
        await newProduct.save();
        res.status(201).json({message: "Product added"});
    } catch (err) {
        console.error(err);
    }
}

module.exports = { createProduct };