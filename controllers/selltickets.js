const Movie = require("../models/movie");
const Show = require("../models/show");
module.exports.home = async (req, res) => {
  const movies = await Movie.find({});
  const shows = await Show.find({});
  res.render("selltickets/home", { movies, shows });
};
