import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../features/ViewPostSlice'
import queriedPostSliceReducer from '../features/SubRedditPostSlice'

const store = configureStore({
    reducer: {
        post: postSliceReducer,
        queriedPosts: queriedPostSliceReducer
    }
})

export default store