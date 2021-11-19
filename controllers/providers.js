const Provider = require("../models/provider");

// HOME - INDEX
module.exports.home = async (req, res) => {
  const providers = await Provider.find({});
  res.render("providers/home", { providers });
};

// CREATE PROVIDER
module.exports.create = async (req, res) => {
  const newProvider = new Provider(req.body);
  await newProvider.save();
  res.redirect("/providers");
};

// SHOW ONE PROVIDER
module.exports.show = async (req, res) => {
  const id = req.params.id;
  const provider = await Provider.findById(id).populate("products");
  res.render("providers/show", { provider });
};

// UPDATE PROVIDER FORM
module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const provider = await Provider.findById(id);
  res.render("providers/edit", { provider });
};

// UPDATE PROVIDER
module.exports.update = async (req, res) => {
  const id = req.params.id;
  await Provider.findByIdAndUpdate(id, req.body);
  res.redirect("/providers");
};

// DELETE PROVIDER
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Provider.findByIdAndDelete(id);
  res.redirect("/providers");
};
