const mongoose = require("mongoose");
const { Schema } = mongoose;

const showSchema = new Schema({
  movie: { type: String },
  auditorium: { type: String },
  day: { type: String },
  showtime: { type: String },
  availableSeats: { type: Number },
});

module.exports = mongoose.model("Show", showSchema);
