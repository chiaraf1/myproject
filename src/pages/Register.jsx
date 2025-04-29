import React, {useState} from "react";

export default function Register() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const API_URL = "http://localhost:5001/api";

    const registrar = async (e) => {
        e.preventDefault();
        const res =  await fetch(`${API_URL}/register`, { 
            method: "POST", 
            header:{"Content-type": "application/json"}, 
            body: JSON.stringify({nombre, email, password})
        });
        const data = await res.json();
        if(res.status === 400){
            alert ("Error al crear usuario");
        } else if (res.status === 201){
            alert("usuario creado correctamente");
        }
    };
    return (
    <form action="">
        <input type="text" 
        placeholder='username' 
        onChange={(e) => setNombre(e.target.value)}
        />
        <input type="email" 
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" 
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={registrar}
        >Register
        </button>
    </form>
    )
}
