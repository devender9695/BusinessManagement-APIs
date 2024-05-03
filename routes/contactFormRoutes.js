// api/routes/contactFormRoutes.js

const express = require("express");
const router = express.Router();
const contactFormController = require("../controllers/contactFormController");

// Create a new contact form entry
router.post(
  "/createContactFormEntry",
  contactFormController.createContactFormEntry
);

// Get all contact form entries
router.get(
  "/getContactFormEntries",
  contactFormController.getContactFormEntries
);

// Update a contact form entry by ID
router.put(
  "/updateContactFormEntry:id",
  contactFormController.updateContactFormEntry
);

// Delete a contact form entry by ID
router.delete(
  "/deleteContactFormEntry:id",
  contactFormController.deleteContactFormEntry
);

module.exports = router;
