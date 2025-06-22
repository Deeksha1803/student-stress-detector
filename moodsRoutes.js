const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood");

router.post("/", async (req, res) => {
  try {
    const mood = new Mood(req.body);
    await mood.save();
    res.status(201).json(mood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const moods = await Mood.find();
    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;