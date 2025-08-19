const express = require("express");
const router = express.Router();
const alloweduserRole = require("../middleware/authorization");

const {allProducts, createProduct, editProduct, deleteProduct} = require("../controller/ProductController");

router.get("/", allProducts);
router.post("/add", alloweduserRole, createProduct);
router.put("/:id", alloweduserRole, editProduct);
router.delete("/:id", alloweduserRole, deleteProduct);

module.exports = router;