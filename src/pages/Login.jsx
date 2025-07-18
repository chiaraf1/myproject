import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/usuarios/usuariosSlice";
import { useNavigate } from "react-router-dom";
import { esAdmin } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const loginEvent = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("rta del back login:", data);

    if (res.status === 200 && data.token) {
         // ✅ Guardamos el usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify(data.data)); // Guarda { nombre, email }
        localStorage.setItem("token", data.token); // opcional

        //Redux
        dispatch(login({ email: data.data.email, token: data.token }));
        navigate(esAdmin() ? "/" : "/perfil");
      
    } else {
      alert(data.mensaje);
    } 
  } catch (error) {
      console.error("Error en el login:");
      alert("Error de conexion");
    }
  };

  return (
    <form className="login" onSubmit={loginEvent}>
      <h1 className="center">Login</h1>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button-login" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
