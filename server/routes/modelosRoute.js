const express = require("express");
const router = express.Router();
const Modelo = require("../models/Modelos"); // mongoose


// 📌 Ruta para obtener todos los modelos
router.get("/", async (req, res) => {
    try {
      const modelos = await Modelo.find(); // Busca todos los documentos en la colección
      res.json(modelos); // Envía el array al frontend
    } catch (error) {
      console.error("Error al obtener modelos:", error);
      res.status(500).json({ error: "Error al obtener modelos" });
    }
  });

// Ruta para agregar un modelo
router.post("/agregar", async (req, res) => {
try {
    const nuevoModelo = new Modelo(req.body);
    await nuevoModelo.save();
    res.status(201).json({ mensaje: "Modelo agregado con éxito" });
} catch (error) {
    res.status(500).json({ error: "Error al agregar modelo" });
}
});

module.exports = router;
