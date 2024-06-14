const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;
const users = require("./models/users");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@database.agsmxk2.mongodb.net/users?retryWrites=true&w=majority&appName=database").then(() => {
    console.log("database connected");
});

app.get("/users", async (req, res) => {
  try {
    const data = await users.find({});
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT, () => {
    console.log("server is running",{PORT});
});