import { configureStore } from "@reduxjs/toolkit";
import modelosReducer from "../features/modelos/modelosSlice";
import usuariosReducer from "../features/usuarios/usuariosSlice";
import desfilesReducer from "../features/desfiles/desfilesSlice";

export const store = configureStore({
    reducer: {
        modelos: modelosReducer,
        usuarios: usuariosReducer,
        desfiles: desfilesReducer,
    },
});