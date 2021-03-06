const Movie = require("../models/movie");
const Show = require("../models/show");

const Auditorium = require("../models/auditorium");
module.exports.home = async (req, res) => {
  const movies = await Movie.find({});
  const auditoriums = await Auditorium.find({});
  const shows = await Show.find({});
  res.render("shows/home", { movies, auditoriums, shows });
};

module.exports.create = async (req, res) => {
  const { movie, auditorium, day, showtime, availableSeats } = req.body;

  if (!movie || !auditorium || !day || !showtime) {
    console.log("INCOMPLETE REQUEST");
  } else {
    // CREATING SHOW
    const newShow = new Show({
      movie,
      auditorium,
      day,
      showtime,
      availableSeats,
    });
    await newShow.save();
  }
  res.redirect("/home");
};
