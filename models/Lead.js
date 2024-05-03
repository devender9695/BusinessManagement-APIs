const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Converted", "Lost"], // Example lead statuses
    default: "New",
  },
  
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
