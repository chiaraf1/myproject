require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware CORS configurado
const allowedOrigins = [
  "https://myproject-d2cray4yv-chiaraf1s-projects.vercel.app",
  "https://myproject-git-master-chiaraf1s-projects.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Rutas
const userRoutes = require("./routes/usuarios");
const postRoutes = require("./routes/postsRoutes");

app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// Test
app.get("/", (req, res) => {
  res.send("API CORRIENDO CORRECTAMENTE");
});

// PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
