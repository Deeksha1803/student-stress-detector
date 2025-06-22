const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  dob: String,
  gender: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
