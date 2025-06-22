const express = require("express");
const router = express.Router();
const UserProfile = require("../models/UserProfile");

router.post("/", async (req, res) => {
  console.log("Received data:", req.body); // ✅ Debug line

  try {
    const newProfile = new UserProfile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error("❌ Error saving profile:", error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
