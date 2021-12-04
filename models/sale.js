const mongoose = require("mongoose");
const { Schema } = mongoose;

const saleSchema = new Schema({
  details: {
    type: Schema.Types.ObjectId,
    refPath: "Purchase",
  },
  Purchase: {
    type: String,
    enum: ["ProductPurchase", "TicketPurchase"],
  },
  madeBy: { type: Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["product", "ticket"] },
  date: { type: String },
});

module.exports = mongoose.model("Sale", saleSchema);

// Empleado | Tipo (Producto | Ticket) | Fecha | Total | Detalles
