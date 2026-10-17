require("dotenv").config();

const express = require("express");
const { error } = require("node:console");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => res.send("My Week 2 API!"));

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing Data" });
  res.status(201).json({ message: `Hello ${name}` });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send({ message: `User ${id} profile` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
