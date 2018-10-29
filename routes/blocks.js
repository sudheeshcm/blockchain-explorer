const express = require("express");
const router = express.Router();

const blockController = require("../controller/blocks");

/* GET Block listing. */
router.get("/", blockController.getBlocks);

/* GET Block by hash. */
router.get("/:hash", blockController.getBlockByHash);

module.exports = router;
