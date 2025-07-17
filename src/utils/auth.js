// src/utils/auth.js

export function esAdmin() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    return (
    usuario &&
    usuario.email?.trim().toLowerCase() === "ctatifm77@gmail.com"
    );
}

