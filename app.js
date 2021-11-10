const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// EMPLOYEE ROUTES
app.get("/employee", (req, res) => {
  res.render("employees/new");
});

app.post("/employee", (req, res) => {});

// MISC ROUTES
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
