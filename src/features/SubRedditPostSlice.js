import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchQuereyedPost = createAsyncThunk('post/fetchQuereyedPost', async (subreddit) => {
    const res = await axios.get(`https://www.reddit.com/search.json?q=${subreddit}` )
    .then(res => {
        const json = res.data.data
        console.log(json)
    })
})

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

const quereyedPostSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchQuereyedPost.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchQuereyedPost.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })

        builder.addCase(fetchQuereyedPost, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default quereyedPostSlice.reducer