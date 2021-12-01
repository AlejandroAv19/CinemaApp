const mongoose = require("mongoose");
const { Schema } = mongoose;

const productOrderSchema = new mongoose.Schema({
  orders: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
      pricePerUnit: { type: Number },
    },
  ],
  date: { type: String },
});

module.exports = mongoose.model("ProductOrder", productOrderSchema);
