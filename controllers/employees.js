const Employee = require("../models/employee");

module.exports.index = async (req, res) => {
  const employees = await Employee.find({});
  res.render("employees/index", { employees });
};

module.exports.newForm = (req, res) => {
  res.render("employees/new");
};

module.exports.create = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/show", { employee });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.render("employees/edit", { employee });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  await Employee.findByIdAndUpdate(id, { name, age });
  res.redirect("/");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Employee.findByIdAndDelete(id);
  res.redirect("/");
};
