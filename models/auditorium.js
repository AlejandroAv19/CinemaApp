const mongoose = require("mongoose");

const auditoriumSchema = new mongoose.Schema({
    number: {type: Number, required:true},
    capacity: {type: Number, min: 0, max: 50, required: true},
    proyectionType: {type: String, enum: ["2D", "3D"], required: true}
})

module.exports = mongoose.model("Auditorium", auditoriumSchema);