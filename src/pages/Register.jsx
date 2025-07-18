import React, { useState } from "react";

export default function Register() {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const API_URL = import.meta.env.VITE_API_URL;

const registrar = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
    alert("Por favor completa todos los campos");
    return;
    }

    try {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
        alert("Usuario creado correctamente");
        setNombre("");
        setEmail("");
        setPassword("");
    } else {
        alert(data.mensaje || "Error al registrar");
    }
    } catch (err) {
    console.error("Error de conexión o formato:", err);
    alert("Ocurrió un error inesperado");
    }
};

return (
    <form onSubmit={registrar} className="register">
    <input
        type="text"
        placeholder="username"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
    />
    <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />
    <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
    />

    <button type="submit" className="button-register">
        Register
    </button>
    </form>
);
}
