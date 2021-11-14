const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hireDate: { type: String, required: true },
  userType: {
    type: String,
    emun: ["employee", "admin", "stock manager"],
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
