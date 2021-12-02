const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  details: { type: Schema.Types.ObjectId, ref: "ProductOrder" },
  madeBy: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: String },
});

module.exports = mongoose.model("Order", orderSchema);
