// Dependencies
const express = require("express");

// Configuration
const app = express();

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
