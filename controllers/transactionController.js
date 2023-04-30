const express = require("express");
const transactions = express.Router();
const { getAllTransactions } = require("../models/transaction");

// Index
transactions.get("/", async (req, res) => {
  res.json(await getAllTransactions());
});

module.exports = transactions;
