const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  sinopsis: { type: String, required: true },
  rating: { type: String, required: true },
  language: { type: String, required: true },
  duration: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
