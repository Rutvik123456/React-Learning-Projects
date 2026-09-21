import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice(
    {
        name:"privacy",
        initialState:false,
        reducers:{
            toggle:(state)=>{return state = !state;},
        }

    }
);

export const privacySliceAction = privacySlice.actions;

export default privacySlice;