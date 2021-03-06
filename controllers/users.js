const User = require("../models/user");

module.exports.home = async (req, res) => {
  const users = await User.find({});
  res.render("users/home", { users });
};

module.exports.create = async (req, res) => {
  const { name, hireDate, userType, username, password } = req.body;
  const newUser = new User({ name, hireDate, userType, username });
  const user = await User.register(newUser, password);
  await user.save();
  res.redirect("/users");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.render("users/show", { user });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.render("users/edit", { user });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, req.body);
  res.redirect("/users");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/users");
};

module.exports.login = (req, res) => {
  const userType = req.user.userType;
  res.cookie("userType", userType);
  res.render("home", { userType });
};
