// api/routes/leadRoutes.js

const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

// Create a new lead
router.post("/createLead", leadController.createLead);

// Get all leads
router.get("/getLeads", leadController.getLeads);

// Update a lead by ID
router.put("/updateLead:id", leadController.updateLead);

// Delete a lead by ID
router.delete("/deleteLead:id", leadController.deleteLead);

module.exports = router;
