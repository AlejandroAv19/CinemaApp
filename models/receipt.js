const mongoose = require("mongoose");
const { Schema } = mongoose;

const receiptSchema = new Schema({
  madeBy: { type: Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["product", "ticket"] },
  date: { type: String },
  total: { type: Number },
});

module.exports = mongoose.model("Receipt", receiptSchema);

// Empleado | Tipo (Producto | Ticket) | Fecha | Total | Detalles
