const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// Create a new team
router.post("/createTeam", teamController.createTeam);

// Get all teams
router.get("/getTeams", teamController.getTeams);

// Update a team by ID
router.put("/updateTeam:id", teamController.updateTeam);

// Delete a team by ID
router.delete("/deleteTeam:id", teamController.deleteTeam);

module.exports = router;
