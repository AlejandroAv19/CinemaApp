const mongoose = require("mongoose");
const { Schema } = mongoose;

const productOrderSchema = new mongoose.Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      productId: { type: Number },
      quantity: { type: Number },
      pricePerUnit: { type: Number },
    },
  ],
});

module.exports = mongoose.model("ProductOrder", productOrderSchema);
