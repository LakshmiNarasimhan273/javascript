const express = require("express");
const router = express.Router();

const { createProduct } = require("../controller/ProductController");

router.post("/product", createProduct);

module.exports = router;