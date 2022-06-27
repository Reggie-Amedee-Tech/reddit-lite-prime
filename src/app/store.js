import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../features/ViewPostSlice'
import quereyedPostSliceReducer from '../features/SubRedditPostSlice'

const store = configureStore({
    reducer: {
        post: postSliceReducer,
        quereyedPost: quereyedPostSliceReducer
    }
})

export default store