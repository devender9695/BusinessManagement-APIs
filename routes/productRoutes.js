const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create a new product
router.post("/createProduct", productController.createProduct);

// Get all products
router.get("/getProducts", productController.getProducts);

// Get a single product by ID
router.get("/getProductById:id", productController.getProductById);

// Update a product by ID
router.put("/updateProduct:id", productController.updateProduct);

// Delete a product by ID
router.delete("/deleteProduct:id", productController.deleteProduct);

module.exports = router;
