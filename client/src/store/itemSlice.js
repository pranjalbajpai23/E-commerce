import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:"item",
    initialState:[],
    reducers:{
        addInitialItem:(store,action)=> {
            return action.payload;
        }
    }
});
export const itemActions=itemSlice.actions;
export default itemSlice;