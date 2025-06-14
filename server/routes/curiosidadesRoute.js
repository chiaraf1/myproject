const express= require("express");
const router = express.Router();
const Curiosidades = require('../models/Curiosidades');

router.get("/", async (req, res) => {
    try {
      const curiosidades = await Curiosidades.find(); // Busca todos los documentos en la colección
      res.json(curiosidades); // Envía el array al frontend
    } catch (error) {
    console.error("Error al obtener Info:", error);
    res.status(500).json({ error: "Error al obtener Info" });
    }
});

//GET por ID
router.get("/:id", async (req, res) => {
    try {
        const item = await Curiosidades.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: "Info no encontrada"});
        }
    res.json(item);
    } catch (error) {
        console.error("Error al obtener la info por ID:", error);
        res.status(500).json({ error: "Error interno del servidor"});
    }
})

// Ruta para agregar info
router.post("/agregar", async (req, res) => {
try {
    const nuevaCuriosidad = new Curiosidades (req.body);
    await nuevaCuriosidad.save();
    res.status(201).json({ mensaje: "Info agregada con éxito" });
} catch (error) {
    res.status(500).json({ error: "Error al agregar info" });
}
});

module.exports = router;