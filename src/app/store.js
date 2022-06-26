import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../features/ViewPostSlice'

const store = configureStore({
    reducer: {
        post: postSliceReducer
    }
})

export default store