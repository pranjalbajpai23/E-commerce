import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,
        fetching:false,
    },
    reducers:{
        mrkFetchDone:(state)=> {
            state.fetchDone=true;
        },
        mrkFetchStarted:(state)=> {
            state.fetching=true;
        },
        mrkFetchFinished:(state)=> {
            state.fetching=false;
            state.fetchDone=true;
        },
    }
});
export const fetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;