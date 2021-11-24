const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketPurchaseSchema = new Schema({
  movie: { type: String },
  auditorium: { type: String },
  day: { type: String, required: true },
  ticketsNumber: { type: Number, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("TicketPurchase", ticketPurchaseSchema);
