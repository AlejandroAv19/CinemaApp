const User = require("../models/user");

module.exports.index = async (req, res) => {
  const users = await User.find({});
  res.render("users/index", { users });
};

module.exports.newForm = (req, res) => {
  res.render("users/new");
};

module.exports.create = async (req, res) => {
  const { name, hireDate, userType, username, password } = req.body;
  const newUser = new User({ name, hireDate, userType, username });
  const user = await User.register(newUser, password);
  await user.save();
  res.redirect("/");
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
  console.log(req.body);
  await User.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/");
};

module.exports.loginForm = (req, res) => {
  res.render("users/login");
};

module.exports.login = (req, res) => {
  const userType = req.user.userType;
  res.cookie("userType", userType);
  res.render("home", { userType });
};
