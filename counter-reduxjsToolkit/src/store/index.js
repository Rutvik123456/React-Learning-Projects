import {configureStore}from "@reduxjs/toolkit";
import slice from "./counterSlice";
import privacySlice from "./privacySlice";


const store=configureStore({
    reducer:{
        counter:slice.reducer,
        privacy:privacySlice.reducer}
});
export default store;