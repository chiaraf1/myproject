require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");
const app = express();
// ✅ Middleware para parsear JSON
app.use(express.json());
const whiteList = ["https://myproject-git-main-chiaraf1s-projects.vercel.app"];
app.use(cors({origin: whiteList}));

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
