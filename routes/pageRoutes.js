// api/routes/pageRoutes.js

const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// Create a new page
router.post("/createPage", pageController.createPage);

// Get all pages
router.get("/getPages", pageController.getPages);

// Update a page by ID
router.put("/updatePage:id", pageController.updatePage);

// Delete a page by ID
router.delete("/deletePage:id", pageController.deletePage);

module.exports = router;
