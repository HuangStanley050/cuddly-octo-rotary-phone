const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => res.send("hi this is root"));
app.get("/api", (req, res) => res.send("this is api route"));

app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}../client/build/index.html`));
});

module.exports = app;
