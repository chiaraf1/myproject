// utils/auth.js
export function esAdmin() {
    const usuarioStr = localStorage.getItem("usuario");
    if (!usuarioStr) return false;
    const usuario = JSON.parse(usuarioStr);
    return usuario.email?.toLowerCase() === "ctatifm77@gmail.com";
}
