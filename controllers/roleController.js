const Role = require("../models/Role");

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a role by ID
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, permissions } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(
      id,
      { name, permissions },
      { new: true }
    );
    if (!updatedRole) {
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });
    }
    res.status(200).json({ success: true, data: updatedRole });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a role by ID
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRole = await Role.findByIdAndDelete(id);
    if (!deletedRole) {
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
