require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/usuarios");
const modeloRoutes = require("./routes/modelosRoute");
const desfileRoutes = require("./routes/desfilesRoute");

app.use("/api", userRoutes);
app.use("/api/modelos", modeloRoutes);
app.use('/uploads', express.static('uploads'));
app.use("/api/desfiles" , desfileRoutes);

app.get("/", (req, res) => {
  res.send("API CORRIENDO CORRECTAMENTE");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
