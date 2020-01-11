const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hi this is root"));
app.get("/api", (req, res) => res.send("this is api route"));

module.exports = app;
