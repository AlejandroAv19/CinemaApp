const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// DB CONNECTION
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k8zct.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log("error", e);
  });

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
