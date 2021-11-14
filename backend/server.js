const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.get("/example", (req, res) => {
  res.send("hi from the server");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  users.push(user);
  res.status(201).send();
  console.log(users);
});

app.listen(8080, () => {
  console.log("server is alive at 8080");
});
