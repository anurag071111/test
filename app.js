const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/test", (req, res) => {
  res.render("test");
});
app.get("/best", (req, res) => {
  res.render("best");
});
