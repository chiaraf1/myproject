const mongoose = require("mongoose");

const DesfilesSchema = new mongoose.Schema({
    description: { type: String },
    nombre: { type: String },
    año: { type: Number },
    diseñador: { type: String },
    videoUrl: {type: String},
});

module.exports = mongoose.model("Desfiles", DesfilesSchema);