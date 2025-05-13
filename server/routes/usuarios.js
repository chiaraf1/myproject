const express = require("express");
const router = express.Router();
const verificarToken = require("../middleware/auth");
const usuariosController = require("../controllers/usuariosController");

router.post("/register", usuariosController.register);
router.post("/login", usuariosController.login);
router.get("/perfil", verificarToken, usuariosController.perfil);

module.exports = router;
