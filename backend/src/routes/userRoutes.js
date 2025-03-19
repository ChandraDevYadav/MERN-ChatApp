import express from "express";
import User from "../models/user.model.js";
import { searchUsers } from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Fetch single user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/search", searchUsers);

export default router;
