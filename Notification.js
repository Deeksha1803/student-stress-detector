const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  title: String,
  message: String,
  is_read: Boolean,
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
