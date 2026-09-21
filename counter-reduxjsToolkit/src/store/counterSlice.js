import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;
        },
        add:(state,action)=>{
            state.counterVal += action.payload;
        },
        substract:(state,action)=>{
            state.counterVal -= action.payload;
        },
    }

});

export const counterAction = slice.actions;

export default slice;
