"use strict";

const mockTransactions = require("../__mocks__/transactions");
const mockBlocks = require("../__mocks__/blocks");

const searchByQuery = (req, res, next) => {
  const { searchText } = req.query;

  if (!searchText) {
    res.status(422).end({
      transaction: null,
      error: {
        code: "MISSING_PARAMETER",
        message: "Missing searchText param"
      }
    });
  }

  const transactions = mockTransactions.filter(t =>
    t.hash.startsWith(searchText)
  );
  const blocks = mockBlocks.filter(b => b.hash.startsWith(searchText));

  res.send({
    transactions,
    blocks
  });
};

module.exports = searchByQuery;
