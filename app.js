//requiring modules
const express = require("express");
const app = express();
const ejs = require("ejs");

//enable the css, ejs
app.use(express.static("public"));
app.set("view engine", "ejs");

//Show views
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/github", function (req, res) {
  res.render("github.ejs");
});

app.get("/heroku", function (req, res) {
  res.render("heroku.ejs");
});

app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});

//app listen on ports
app.listen(process.env.PORT || 1000, function () {
  console.log("website is running");
});
