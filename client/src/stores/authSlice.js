import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:null,
    active:false
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action.payload)
            state.active=true;
            state.user=action.payload
        },
        logout:(state)=>{
            state.active=false,
            state.user=null
        }
    }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer