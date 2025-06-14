const mongoose = require("mongoose");

const CuriosidadesSchema = new mongoose.Schema({
    title: { type: String },
    img: { 
        src: {type: String},
        alt: {type: String},
    },
    description: { type: String },
    category : { type: String}
    
});

module.exports = mongoose.model("Curiosidades", CuriosidadesSchema);