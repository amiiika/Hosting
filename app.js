//requiring modules
const express = require("express");
const app = express();
const ejs = require("ejs");

//enable the css, ejs
app.use(express.static("public"));
app.set("view engine", "ejs");

//Show views
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/github", function (req, res) {
  res.render("github");
});

app.get("/heroku", function (req, res) {
  res.render("heroku");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

//app listen on ports
app.listen(process.envPORT || 1000, function () {
  console.log("website is running");
});
