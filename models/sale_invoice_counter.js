const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Sale_Invoice",
  new mongoose.Schema({}),
  "sales_invoice_counters"
);
