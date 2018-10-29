const express = require("express");
const router = express.Router();

const transactionController = require("../controller/transactions");

/* GET transaction listing. */
router.get("/", transactionController.getTransactions);

/* GET transaction by Id. */
router.get("/:hash", transactionController.getTransactionByHash);

module.exports = router;
