const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateUser = require("../middleware/authMiddleware");

// Create a new user
router.post("/createUser", userController.createUser);
router.post("/login", userController.userLogin);

// Protected routes
router.use(authenticateUser);
router.get("/getUsers", userController.getUsers);
router.get("/getUserProfile/:id", userController.getUserProfile); // Updated route
router.put("/updateUserProfile/:id", userController.updateUserProfile); // Updated route
router.put(
  "/updateUserPassword/:id", // Updated route
  userController.updateUserPassword
);
router.delete("/deleteUser/:id", userController.deleteUser); // Updated route

module.exports = router;
