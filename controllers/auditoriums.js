const Auditorium = require("../models/auditorium");

module.exports.home = async (req, res) => {
  const auditoriums = await Auditorium.find({});
  res.render("auditoriums/home", { auditoriums });
};

module.exports.create = async (req, res) => {
  const newAuditorium = new Auditorium(req.body);
  await newAuditorium.save();
  res.redirect("/auditoriums");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const auditorium = await Auditorium.findById(id);
  res.render("auditoriums/show", { auditorium });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const auditorium = await Auditorium.findById(id);
  res.render("auditoriums/edit", { auditorium });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  await Auditorium.findByIdAndUpdate(id, req.body);
  res.redirect("/auditoriums");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Auditorium.findByIdAndDelete(id);
  res.redirect("/auditoriums");
};
