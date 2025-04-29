import { configureStore } from "@reduxjs/toolkit";
import modelosReducer from "../features/modelos/modelosSlice";

export const store = configureStore({
    reducer: {
        modelos: modelosReducer,
    },
});