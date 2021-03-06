const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const blocksRouter = require("./routes/blocks");
const transactionsRouter = require("./routes/transactions");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", indexRouter);
app.use("/api/blocks", blocksRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/*", (req, res) => {
  res.redirect("/");
});

module.exports = app;
