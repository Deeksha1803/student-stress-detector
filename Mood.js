const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  mood: String,
  note: String,
}, { timestamps: true });

module.exports = mongoose.model("Mood", moodSchema);