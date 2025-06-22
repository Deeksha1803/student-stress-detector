const express = require("express");
const router = express.Router();
const SurveyResponse = require("../models/SurveyResponse");

router.post("/", async (req, res) => {
  try {
    const response = new SurveyResponse(req.body);
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const responses = await SurveyResponse.find();
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
