// Dependencies
const express = require("express");
const ejs = require("ejs");

// Configuration
const app = express();

// Middleware
// app.use(express.json()); // parse incoming json
app.use(express.urlencoded({ extended: false })); // parse incoming urlencoded
app.use(express.static("public"));

app.get("/hello", (req, res) => {
  res.send("hello");
});

// Transaction routes
const transactionController = require("./controllers/transactionController");
app.use("/transactions", transactionController);

// 404 Page

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
