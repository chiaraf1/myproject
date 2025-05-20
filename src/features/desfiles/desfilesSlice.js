import { createSlice } from "@reduxjs/toolkit";

export const desfilesSlice = createSlice ({
    name:"desfiles",
    initialState:[],
    reducers: {
        agregarDesfile: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { agregarDesfile } = desfilesSlice.actions;
export default desfilesSlice.reducer;