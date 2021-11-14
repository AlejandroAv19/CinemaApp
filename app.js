// NPM PACKAGES
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { dbConnection } = require("./config/dbConection");

const app = express();
dotenv.config();

// ESPRESS SET & USE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// DB CONNECTION
dbConnection();

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
