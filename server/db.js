require("dotenv").config();
const mongoose= require ("mongoose");

mongoose.connect(process.env.MONGO_URI_ATLAS)
.then(() => {
    console.log("Conectado a la base de datos");
})
.catch((e) => {
    console.error(e);
});


