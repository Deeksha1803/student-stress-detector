const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    full_name: String,
    unit: String,
    position: String,
    age: Number,
    gender: String,
    education_level: String,
    marital_status: String,
    years_of_service: Number,
    height: Number,
    weight: Number,
    blood_group: String,
    medical_conditions: {
      type: [String],  // ✅ Correct format: array of strings
      default: []
    },
    allergies: {
      type: [String],  // ✅ Correct format: array of strings
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProfile", userProfileSchema);
