const express = require("express");
const transactions = express.Router();

// Index
transactions.get("/", (req, res) => {
  res.send("Index Page");
});

module.exports = transactions;
