import { createSlice } from "@reduxjs/toolkit";

const initialState = {
email: "",
token: "",
isAuthenticated: false,
};

export const usuariosSlice = createSlice({
name: "usuarios",
initialState,
reducers: {
    login: (state, action) => {
    state.email = action.payload.email;
    state.token = action.payload.token;
    state.isAuthenticated = true;
    },
    logout: (state) =>{
        state.email = null;
        state.nombre = null;
        state.token = null;
        state.isAuthenticated = false;
    },
},
});

export const { login, logout } = usuariosSlice.actions;

export default usuariosSlice.reducer;