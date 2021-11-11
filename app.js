const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
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

// DB MODELS
const Employee = require("./models/employee");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
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

app.post("/employee", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/");
});

// MISC ROUTES
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
