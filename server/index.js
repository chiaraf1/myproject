require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

// CORS seguro con subdominios de Vercel
const allowedOrigins = [
  "http://localhost:5173", // tu entorno local
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      allowedOrigins.includes(origin) ||
      (origin && origin.endsWith(".vercel.app"))
    ) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS: " + origin));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Para parsear JSON

// Rutas
const userRoutes = require("./routes/usuarios");
const postRoutes = require("./routes/postsRoutes");

app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API CORRIENDO CORRECTAMENTE");
});

// Puerto
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
