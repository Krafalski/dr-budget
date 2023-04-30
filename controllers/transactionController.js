const express = require("express");
const transactions = express.Router();
const {
  getAllTransactions,
  getOneTransaction,
  createTransaction,
} = require("../models/transaction");

// Index
transactions.get("/", async (req, res) => {
  res.json(await getAllTransactions());
});

// Show
transactions.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneTransaction(id));
});

// Create
transactions.post("/", async (req, res) => {
  const transaction = await createTransaction(req.body);
  res.json(transaction);
});

// 404
transactions.get("*", (req, res) => {
  res.status(404).res.send("Not found");
});

module.exports = transactions;
