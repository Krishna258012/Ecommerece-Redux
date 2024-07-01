import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        deleteItem(state,action){
            return state.filter((item)=>item.id !== action.payload)
            // state.splice(action.payload , 1)
        }
    }
})

export const {add,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;