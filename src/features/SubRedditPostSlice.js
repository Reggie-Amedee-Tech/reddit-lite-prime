import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchQueriedPost = createAsyncThunk('post/fetchQuereyedPost', async (subreddit) => {
    const res = await axios.get(`https://www.reddit.com/search.json?q=${subreddit}&raw_json=1&sort=new&limit=25&include_over_18=off` )
    .then(res => {
        return res.data.data
    })
    .then(json => {
        return json.children.map(child => child.data)
    })
    console.log(res)
    return res
})

const initialState = {
    loading: false,
    queriedPosts: [],
    error: ''
}

const queriedPostSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchQueriedPost.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchQueriedPost.fulfilled, (state, action) => {
            state.loading = false
            state.queriedPosts = action.payload
            state.error = ''
        })

        builder.addCase(fetchQueriedPost, (state, action) => {
            state.loading = false
            state.queriedPosts = []
            state.error = action.error.message
        })
    }
})

export default queriedPostSlice.reducer