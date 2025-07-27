require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");
const app = express();

// ✅ Middleware para parsear JSON
app.use(express.json());

// ✅ Middleware CORS
app.use(cors({
  origin: "https://incomparable-bombolone-6a8844.netlify.app",
  credentials: true,
}));

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

// ✅ 👇 Esta línea es clave para que los tests funcionen
module.exports = app;

// ✅ Iniciar servidor solo si no es entorno de test
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  );
}
