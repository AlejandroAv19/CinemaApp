const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Order_Invoice",
  new mongoose.Schema({}),
  "orders_invoice_counters"
);
