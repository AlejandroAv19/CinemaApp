const mongoose = require("mongoose");
const { Schema } = mongoose;

const productPurchaseSchema = new Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      productId: { type: Number },
      quantity: { type: Number },
      pricePerUnit: { type: Number },
    },
  ],
});

module.exports = mongoose.model("ProductPurchase", productPurchaseSchema);

// ID Producto | Producto | Cantidad | Precio por unidad | Total
