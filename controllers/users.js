const User = require("../models/user");

module.exports.index = async (req, res) => {
  const users = await User.find({});
  res.render("users/index", { users });
};

module.exports.newForm = (req, res) => {
  res.render("users/new");
};

module.exports.create = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
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
