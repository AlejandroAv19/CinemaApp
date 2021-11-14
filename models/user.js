const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hireDate: { type: String, required: true },
  userType: {
    type: String,
    emun: ["employee", "admin", "stock manager"],
    required: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
