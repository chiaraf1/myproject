require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

// Orígenes permitidos en producción y desarrollo
const allowedOrigins = [
  "http://localhost:5173",
  "https://myproject-chiaraf1s-projects.vercel.app",
  "https://myproject-fjgwxvhxa-chiaraf1s-projects.vercel.app", // Dominio que usás en Vercel
];

// Middleware CORS personalizado para manejar errores y evitar 500
app.use((req, res, next) => {
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("⛔️ CORS bloqueado para:", origin);
        callback(new Error("No permitido por CORS: " + origin));
      }
    },
  })(req, res, (err) => {
    if (err) {
      return res.status(403).json({ message: err.message });
    }
    next();
  });
});

// ✅ Middleware para parsear JSON
app.use(express.json());

// ✅ Rutas
const userRoutes = require("./routes/usuarios");
const postRoutes = require("./routes/postsRoutes");

// ✅ Usar rutas
app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// ✅ Ruta raíz
app.get("/", (req, res) => {
  res.send("API CORRIENDO CORRECTAMENTE");
});

// ✅ Puerto
const PORT = process.env.PORT || 5001;

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
