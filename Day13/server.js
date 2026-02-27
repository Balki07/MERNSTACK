const express = require("express");
const connectDB = require("./config/db");
const Student = require("./model/student");
const app = express();
app.use(express.json());
connectDB();
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.get("/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student Deleted" });
});
app.listen(3000, () => {
  console.log("🚀 Server Running on Port 3000");
});
