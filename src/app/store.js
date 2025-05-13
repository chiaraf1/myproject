import { configureStore } from "@reduxjs/toolkit";
import modelosReducer from "../features/modelos/modelosSlice";
import usuariosReducer from "../features/usuarios/usuariosSlice";

export const store = configureStore({
    reducer: {
        modelos: modelosReducer,
        usuarios: usuariosReducer,
    },
});