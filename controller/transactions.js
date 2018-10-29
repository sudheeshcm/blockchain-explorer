"use strict";

const mockTransactions = require("../__mocks__/transactions");

const getTransactions = (req, res, next) => {
  res.send({
    transactions: mockTransactions
  });
};

const getTransactionByHash = (req, res, next) => {
  const { hash } = req.params;

  if (!hash) {
    res.status(422).end({
      transaction: null,
      error: {
        code: "MISSING_PARAMETER",
        message: "Missing hash param"
      }
    });
  }

  const transaction = mockTransactions.find(t => t.hash === hash);

  if (!transaction) {
    res.status(404).send({
      transaction: null,
      error: {
        code: "NOT_FOUND",
        message: "Transaction not found"
      }
    });
  } else {
    res.send({
      transaction
    });
  }
};

module.exports = {
  getTransactions,
  getTransactionByHash
};
