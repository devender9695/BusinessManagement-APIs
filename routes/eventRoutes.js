// api/routes/eventRoutes.js

const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Create a new event
router.post("/createEvent", eventController.createEvent);

// Get all events
router.get("/getEvents", eventController.getEvents);

// Update an event by ID
router.put("/updateEvent:id", eventController.updateEvent);

// Delete an event by ID
router.delete("/deleteEvent:id", eventController.deleteEvent);

module.exports = router;
