const express = require("express");
const { getallProducts, getproductbyId, createProduct, updateProduct, deleteProduct } = require("../controller/productController");

const router = express.Router();

// http://localhost:8081/products
router.get("/products", getallProducts);

// http://localhost:8081/products/2
router.get("/products/:id", getproductbyId);

// http://localhost:8081/products
router.post("/products", createProduct);

// http://localhost:8081/products/2
router.put("/products/:id", updateProduct);

// http://localhost:8081/products/2
router.delete("/products/:id", deleteProduct);

module.exports = router;