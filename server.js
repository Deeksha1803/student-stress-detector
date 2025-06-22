const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // To serve index.html, style.css, script.js

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/moods", require("./routes/moodsRoutes"));
app.use("/api/survey-responses", require("./routes/surveyResponsesRoutes"));
app.use("/api/chat-messages", require("./routes/chatMessagesRoutes"));
app.use("/api/notifications", require("./routes/notificationsRoutes"));
app.use("/api/user-profiles", require("./routes/userProfilesRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
