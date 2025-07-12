import React, {useState} from "react";

export default function Register() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const API_URL = "http://localhost:5001/api";
    const API_URL = import.meta.env.VITE_API_URL;

    const registrar = async (e) => {
        e.preventDefault();
        const res =  await fetch(`${API_URL}/register`, { 
            method: "POST", 
            headers:{"Content-type": "application/json"}, 
            body: JSON.stringify({nombre, email, password})
        });
        console.log("Responde status:", res.status);
        const text = await res.text();
        console.log("Response body:", text);

        try {
            const data = JSON.parse(text);
        if(res.status === 400){
            alert(data.mensaje) || ("Error al crear usuario");
        } else if (res.status === 201){
            alert("usuario creado correctamente");
        }
    } catch (error){
        console.error("No es JSON vàlido:", error);
    }
};
    return (
    <form action="">
        <input type="text" 
        placeholder='username' 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <input type="email" 
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-register"
        type="submit" 
        onClick={registrar}
        >Register
        </button>
    </form>
    )
}
