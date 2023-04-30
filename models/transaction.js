const db = require("../db/dbConfig");

async function getAllTransactions() {
  try {
    const allTransactions = await db.any("SELECT * FROM transactions;");
    return allTransactions;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getAllTransactions,
};
