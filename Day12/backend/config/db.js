let express = require("express");
let mongoose = require("mongoose");
const app = express();

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
// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});