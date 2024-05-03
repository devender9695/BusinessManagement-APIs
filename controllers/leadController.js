const Lead = require("../models/Lead");

// Create a new lead
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, status } = req.body;
    const lead = new Lead({ name, email, phone, status });
    await lead.save();
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a lead by ID
exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, status } = req.body;
    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { name, email, phone, status },
      { new: true }
    );
    if (!updatedLead) {
      return res
        .status(404)
        .json({ success: false, message: "Lead not found" });
    }
    res.status(200).json({ success: true, data: updatedLead });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a lead by ID
exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLead = await Lead.findByIdAndDelete(id);
    if (!deletedLead) {
      return res
        .status(404)
        .json({ success: false, message: "Lead not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
