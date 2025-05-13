const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;

  const usuarioExistente = await Usuario.findOne({ email });
  if (usuarioExistente) {
    return res.status(400).json({ mensaje: "Usuario ya existe" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const nuevoUsuario = new Usuario({
    nombre,
    email,
    password: passwordHash
  });

  await nuevoUsuario.save();
  res.status(201).json({ mensaje: "Usuario registrado", data: nuevoUsuario });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

  const match = await bcrypt.compare(password, usuario.password);
  if (!match) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

  const token = jwt.sign({ id: usuario._id, email: usuario.email }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ mensaje: "Login exitoso", token });
};

exports.perfil = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findById({email});
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado"});
  }

  res.json({ mensaje: "Perfil del usuario", data: usuario });
};
