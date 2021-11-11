const mongoose = require("mongoose");
const { schema } = mongoose;

const employeeSchema = new schema({
  role: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("Employee", employeeSchema);
