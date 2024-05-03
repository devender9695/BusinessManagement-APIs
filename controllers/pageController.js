const Page = require("../models/Page");

// Create a new page
exports.createPage = async (req, res) => {
  try {
    const { title, content } = req.body;
    const page = new Page({ title, content });
    await page.save();
    res.status(201).json({ success: true, data: page });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all pages
exports.getPages = async (req, res) => {
  try {
    const pages = await Page.find();
    res.status(200).json({ success: true, data: pages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a page by ID
exports.updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPage = await Page.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedPage) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }
    res.status(200).json({ success: true, data: updatedPage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a page by ID
exports.deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPage = await Page.findByIdAndDelete(id);
    if (!deletedPage) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
