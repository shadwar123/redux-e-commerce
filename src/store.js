import { configureStore } from "@reduxjs/toolkit";
// import messageslice from './slices/messageslice';
// import notesSlice from './slices/notesSlice';
import productSlice from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
    reducer:{
        // messageReducer:messageslice,
        // notesReducer:notesSlice,
        productReducer:productSlice,
        cartReducer
    }
})