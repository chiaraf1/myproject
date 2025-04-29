import { createSlice } from "@reduxjs/toolkit";

export const modelosSlice = createSlice ({
    name:"modelos",
    initialState:[],
    reducers: {
        agregarModelo: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { agregarModelo} = modelosSlice.actions;
export default modelosSlice.reducer;