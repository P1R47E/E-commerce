import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
};

export const figSlice = createSlice({
    name:"fig",
    initialState,
    reducers:{
        addtoCart: (state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity += action.payload.quantity
            } 
            else{
                state.productData.push(action.payload);
            }

        },
        deleteItem : (state,action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) =>{
            state.productData = [];
        },
        incrementQuantity: (state,action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item)=> item._id === action.payload._id
            );
            if(item.quantity === 1){
                item.quantity = 1;
            }
            else{
                item.quantity--;
            }
        },
        addUser: (state,action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    }
 });

export const {
    addtoCart,
    deleteItem,
    resetCart,
    incrementQuantity,
    decrementQuantity,
    addUser,
    removeUser,
    
} = figSlice.actions;
export default figSlice.reducer;