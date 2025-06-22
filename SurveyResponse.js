const mongoose = require("mongoose");

const surveyResponseSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  category: String,
  question: String,
  answer: String,
}, { timestamps: true });

module.exports = mongoose.model("SurveyResponse", surveyResponseSchema);