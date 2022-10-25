import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:[],
        quantity: 0,
        total: 0
    },
    reducers:{
        addProduct: (state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price*payload.quantity;
        },
    }
    
})

export const {addProduct} = cartSlice;
export default cartSlice.reducer;