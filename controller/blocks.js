"use strict";

const mockBlocks = require("../__mocks__/blocks");

const getBlocks = (req, res, next) => {
  res.send({
    blocks: mockBlocks
  });
};

const getBlockByHash = (req, res, next) => {
  const { hash } = req.params;

  if (!hash) {
    res.status(422).end({
      block: null,
      error: {
        code: "MISSING_PARAMETER",
        message: "Missing hash param"
      }
    });
  }

  const block = mockBlocks.find(b => b.hash === hash);

  if (!block) {
    res.status(404).send({
      block: null,
      error: {
        code: "NOT_FOUND",
        message: "Block not found"
      }
    });
  } else {
    res.send({
      block
    });
  }
};

module.exports = {
  getBlocks,
  getBlockByHash
};
