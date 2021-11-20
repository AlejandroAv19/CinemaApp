const mongoose = require("mongoose");
const { Schema } = mongoose;

const productPurchaseSchema = new Schema({
  items: [
    {
      item: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
      subtotal: { type: Number },
    },
  ],
});

module.exports = mongoose.model("ProductPurchase", productPurchaseSchema);

// ID Producto | Producto | Cantidad | Precio por unidad | Total
