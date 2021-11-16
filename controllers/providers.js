const Provider = require("../models/provider");

module.exports.home = async (req, res) => {
  const providers = await Provider.find({});
  res.render("providers/home", { providers });
};

module.exports.create = async (req, res) => {
  const newProvider = new Provider(req.body);
  await newProvider.save();
  res.redirect("/providers");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const provider = await Provider.findById(id);
  res.render("providers/show", { provider });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const provider = await Provider.findById(id);
  res.render("providers/edit", { provider });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  await Provider.findByIdAndUpdate(id, req.body);
  res.redirect("/providers");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Provider.findByIdAndDelete(id);
  res.redirect("/providers");
};
