const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  auditorium: { type: Schema.Types.ObjectId, ref: "Auditorium" },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  date: { type: String, required: true },
  sits: { type: Number, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);
