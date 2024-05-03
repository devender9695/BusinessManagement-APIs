const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

// Create a new role
router.post("/createRole", roleController.createRole);

// Get all roles
router.get("/getRoles", roleController.getRoles);

// Update a role by ID
router.put("/updateRole:id", roleController.updateRole);

// Delete a role by ID
router.delete("/deleteRole:id", roleController.deleteRole);

module.exports = router;
