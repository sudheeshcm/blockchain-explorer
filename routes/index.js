var express = require("express");
var router = express.Router();

const searchController = require("../controller/search");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

/* Search Route */
router.get("/api/search", searchController);

module.exports = router;
