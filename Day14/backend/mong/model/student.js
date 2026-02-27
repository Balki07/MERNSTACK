const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Player = require("./model/student");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

/* ======================
   CREATE PLAYER
====================== */
app.post("/api/players", async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ======================
   GET ALL PLAYERS
====================== */
app.get("/api/players", async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

/* ======================
   GET SINGLE PLAYER
====================== */
app.get("/api/players/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* ======================
   UPDATE PLAYER
====================== */
app.put("/api/players/:id", async (req, res) => {
  try {
    const updated = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ======================
   DELETE PLAYER
====================== */
app.delete("/api/players/:id", async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);
    res.json({ message: "Player Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});