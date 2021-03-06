const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => res.send("this is api route"));

app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}../client/build/index.html`));
});

module.exports = app;
