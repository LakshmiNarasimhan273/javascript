const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controller/ProductController");

router.post("/products", authMiddleware(["seller"]), createProduct);
router.get("/products", authMiddleware(["seller", "buyer"]) ,getProducts);
router.get("/products/:id", authMiddleware(["seller", "buyer"]), getProductById);
router.put("/products/:id", authMiddleware(["seller"]), updateProduct);
router.delete("/products/:id", authMiddleware(["seller"]), deleteProduct);

module.exports = router;