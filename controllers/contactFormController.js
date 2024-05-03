const ContactForm = require("../models/ContactForm");

// Create a new contact form entry
exports.createContactFormEntry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contactFormEntry = new ContactForm({ name, email, message });
    await contactFormEntry.save();
    res.status(201).json({ success: true, data: contactFormEntry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all contact form entries
exports.getContactFormEntries = async (req, res) => {
  try {
    const entries = await ContactForm.find();
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a contact form entry by ID
exports.updateContactFormEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, message } = req.body;
    const updatedEntry = await ContactForm.findByIdAndUpdate(
      id,
      { name, email, message },
      { new: true }
    );
    if (!updatedEntry) {
      return res
        .status(404)
        .json({ success: false, message: "Contact form entry not found" });
    }
    res.status(200).json({ success: true, data: updatedEntry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a contact form entry by ID
exports.deleteContactFormEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntry = await ContactForm.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res
        .status(404)
        .json({ success: false, message: "Contact form entry not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Contact form entry deleted successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
