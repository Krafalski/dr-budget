const express = require("express");
const transactions = express.Router();
const {
  getAllTransactions,
  getOneTransaction,
  createTransaction,
} = require("../models/transaction");

// Index
transactions.get("/", async (req, res) => {
  const allTransactions = await getAllTransactions();
  res.render("index.ejs", {
    transactions: allTransactions,
  });
});

// New
transactions.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Show
transactions.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneTransaction(id));
});

// Create
transactions.post("/", async (req, res) => {
  console.log(req.body);
  const transaction = await createTransaction(req.body);
  res.redirect("/transactions");
});

// 404
transactions.get("*", (req, res) => {
  res.status(404).res.send("Not found");
});

module.exports = transactions;
