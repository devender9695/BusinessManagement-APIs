const Team = require("../models/Team");

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    const { name, description } = req.body;
    const team = new Team({ name, description });
    await team.save();
    res.status(201).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all teams
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members", "name email"); // Assuming 'members' field contains User references
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!updatedTeam) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    res.status(200).json({ success: true, data: updatedTeam });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
