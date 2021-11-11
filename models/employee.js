const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  role: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("Employee", employeeSchema);
