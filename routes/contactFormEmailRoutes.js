const express = require("express");
const router = express.Router();
const contactFormEmailController = require("../controllers/contactFormEmailController");

// Send an email
router.post("/sendEmail", contactFormEmailController.sendEmail);


module.exports = router;
