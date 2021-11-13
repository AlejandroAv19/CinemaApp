// NPM PACKAGES
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// ESPRESS SET & USE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

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

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

const employeeRoutes = require("./routes/employees");
app.use("/employees", employeeRoutes);

// MISC ROUTES
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
