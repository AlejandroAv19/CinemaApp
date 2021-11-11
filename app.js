const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");

const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// EMPLOYEE ROUTES
// Index   | /employees          | GET    | Display all comments
app.get("/employees", async (req, res) => {
  const employees = await Employee.find({});
  res.render("employees/index", { employees });
});

// New     | /employees/new      | GET    | Form to create a new employee
app.get("/employees/new", (req, res) => {
  res.render("employees/new");
});

// Create  | /employees          | POST   | Creates new employee
app.post("/employees", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/");
});

// Show    | /employees/:id      | GET    | Details for one specific employee
app.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/show", { employee });
});

// Edit    | /employees/:id/edit | GET    | Form to edit specific employee
app.get("/employees/:id/edit", async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/edit", { employee });
});

// Update  | /employee/:id       | PATCH  | Updates specific employee
app.patch("/employees/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  await Employee.findByIdAndUpdate(id, { name, age });
  res.redirect("/");
});

// Destroy | /employee/:id       | DELETE | Deletes specific item
app.delete("/employees/:id", async (req, res) => {
  const id = req.params.id;
  await Employee.findByIdAndDelete(id);
  res.redirect("/");
});

// MISC ROUTES
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
