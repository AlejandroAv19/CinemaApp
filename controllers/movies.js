const Movie = require("../models/movie");

module.exports.home = async (req, res) => {
  const movies = await Movie.find({});
  res.render("movies/home", { movies });
};

module.exports.create = async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.redirect("/movies");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  res.render("movies/show", { movie });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  res.render("movies/edit", { movie });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  await Movie.findByIdAndUpdate(id, req.body);
  res.redirect("/movies");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Movie.findByIdAndDelete(id);
  res.redirect("/movies");
};
