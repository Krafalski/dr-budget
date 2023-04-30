const db = require("../db/dbConfig");

async function getAllTransactions() {
  try {
    const allTransactions = await db.any("SELECT * FROM transactions;");
    return allTransactions;
  } catch (err) {
    return err;
  }
}

async function getOneTransaction(id) {
  try {
    const oneTransaction = await db.one(
      "SELECT * FROM transactions WHERE id=$1",
      id
    );
    return oneTransaction;
  } catch (err) {
    return err;
  }
}

async function createTransaction(transaction) {
  try {
    const newTransaction = await db.one(
      "INSERT INTO transactions (details, amount, time_type, category, is_income, vendor, is_recurring) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
      [
        transaction.details,
        transaction.amount,
        transaction.time_type,
        transaction.category,
        transaction.is_income,
        transaction.vendor,
        transaction.is_recurring,
      ]
    );

    return newTransaction;
  } catch (err) {
    return err;
  }
}
module.exports = {
  getAllTransactions,
  getOneTransaction,
  createTransaction,
};
