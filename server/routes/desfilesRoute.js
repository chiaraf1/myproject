const express = require("express");
const router = express.Router();
const Desfiles = require("../models/Desfiles"); // mongoose


// 📌 Ruta para obtener todos los desfiles
router.get("/", async (req, res) => {
    try {
      const desfiles = await Desfiles.find(); // Busca todos los documentos en la colección
      res.json(desfiles); // Envía el array al frontend
    } catch (error) {
    console.error("Error al obtener Desfiles:", error);
    res.status(500).json({ error: "Error al obtener desfiles" });
    }
});

// Ruta para agregar un desfile
router.post("/agregar", async (req, res) => {
try {
    const nuevoDesfile = new Desfiles (req.body);
    await nuevoDesfile.save();
    res.status(201).json({ mensaje: "Desfile agregado con éxito" });
} catch (error) {
    res.status(500).json({ error: "Error al agregar Desfile" });
}
});

module.exports = router;