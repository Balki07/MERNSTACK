const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
// Middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Atlas Connection String
const MONGO_URI = "mongodb://localhost:27017/";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server Running & MongoDB Connected");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});