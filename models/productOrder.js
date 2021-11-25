const mongoose = require("mongoose");
const { Schema } = mongoose;

const productOrderSchema = new mongoose.Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number },
  pricePerUnit: { type: Number },
  subtotal: { type: Number },
  providersCut: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model("ProductOrder", productOrderSchema);
