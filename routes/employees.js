const express = require("express");
const methodOverride = require("method-override");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(methodOverride("_method"));

const Employee = require("../models/employee");

// EMPLOYEE ROUTES
// Index   | /employees          | GET    | Display all comments
router.get("/", async (req, res) => {
  const employees = await Employee.find({});
  res.render("employees/index", { employees });
});

// New     | /employees/new      | GET    | Form to create a new employee
router.get("/new", (req, res) => {
  res.render("employees/new");
});

// Create  | /employees          | POST   | Creates new employee
router.post("/", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/");
});

// Show    | /employees/:id      | GET    | Details for one specific employee
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/show", { employee });
});

// Edit    | /employees/:id/edit | GET    | Form to edit specific employee
router.get("/:id/edit", async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/edit", { employee });
});

// Update  | /employee/:id       | PATCH  | Updates specific employee
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  await Employee.findByIdAndUpdate(id, { name, age });
  res.redirect("/");
});

// Destroy | /employee/:id       | DELETE | Deletes specific item
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Employee.findByIdAndDelete(id);
  res.redirect("/");
});

module.exports = router;
