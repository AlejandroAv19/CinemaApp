const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  pricePerUnit: { type: Number },
  stockLimit: { type: Number },
  stock: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
