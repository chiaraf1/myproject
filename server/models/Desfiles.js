const mongoose = require("mongoose");

const DesfilesSchema = new mongoose.Schema({
    description: { type: String },
    nombre: { type: String },
    altura: { type: Number },
    medidas: [{ type: Number }],
    text: { type: String },
    img: {
        src: {type: String},
        alt: {type: String}
    }
});

module.exports = mongoose.model("Modelos", ModelosSchema);