require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
//Middlewares
app.use(cors());
app.use(express.json());//pass json data

//Rutas
const userRoutes = require("./routes/usuarios");
const postRoutes = require("./routes/postsRoutes");

//Usar rutas
app.use("/api", userRoutes);
app.use('/uploads', express.static('uploads'));
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => {
  res.send("API CORRIENDO CORRECTAMENTE");
});

//PORT
const PORT = process.env.PORT || 5001;
//Start the server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
