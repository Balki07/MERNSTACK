const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ==========================
   CONNECT TO MONGODB
========================== */
mongoose.connect("mongodb://127.0.0.1:27017/cricketDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* ==========================
   PLAYER SCHEMA
========================== */
const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  age: { type: Number, required: true },
  jersey: { type: Number, required: true }
}, { timestamps: true });
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  sport: String,
  role: String
});

const User = mongoose.model("User", userSchema);

const Player = mongoose.model("Player", playerSchema);

/* ==========================
   ROUTES
========================== */

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

/* ===== GET ALL PLAYERS ===== */
app.get("/api/players", async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

/* ===== ADD PLAYER ===== */
app.post("/api/players", async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.json({
      message: "Player added successfully ✅",
      player
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ===== UPDATE PLAYER ===== */
app.put("/api/players/:id", async (req, res) => {
  try {
    const updated = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Player not found ❌" });
    }

    res.json({
      message: "Player updated successfully ✅",
      player: updated
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* ===== DELETE PLAYER ===== */
app.delete("/api/players/:id", async (req, res) => {
  try {
    const deleted = await Player.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Player not found ❌" });
    }

    res.json({
      message: "Player deleted successfully ✅",
      player: deleted
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ADD USER
app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});