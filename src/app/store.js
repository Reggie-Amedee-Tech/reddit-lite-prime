import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../features/ViewPostSlice'
import queriedPostSliceReducer from '../features/SubRedditPostSlice'
import searchPostSliceReducer from '../features/SearchRedditPostSlice'

const store = configureStore({
    reducer: {
        post: postSliceReducer,
        queriedPosts: queriedPostSliceReducer,
        searchedPosts: searchPostSliceReducer
    }
})

export default store