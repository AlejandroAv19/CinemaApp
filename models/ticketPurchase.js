const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketPurchaseSchema = new Schema({
  movie: { type: String },
  auditorium: { type: Number },
  day: { type: String },
  showtime: { type: String },
  ticketsNumber: { type: Number, required: true },
});

module.exports = mongoose.model("TicketPurchase", ticketPurchaseSchema);
