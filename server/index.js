require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/usuarios");
const modeloRoutes = require("./routes/modelosRoute");

app.use("/api", userRoutes);
app.use("/api/modelos", modeloRoutes);
app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
