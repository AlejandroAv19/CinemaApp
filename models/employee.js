const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hireDate: { type: Date, default: Date.now, required: true },
  userType: {
    type: String,
    emun: ["Employee", "Admin", "Stock Manager"],
    required: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Employee", employeeSchema);
