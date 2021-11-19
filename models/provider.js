const mongoose = require("mongoose");
const { Schema } = mongoose;

const providerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Provider", providerSchema);
