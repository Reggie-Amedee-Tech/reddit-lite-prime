import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// API call for the reddit json data
export const fetchPosts = createAsyncThunk('post/fetchPosts', async (payload, {dispatch}) => {
    const res = await axios.get('https://www.reddit.com/r/popular.json?q=' + "&raw_json=1")
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
    posts: [],
    error: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })

        builder.addCase(fetchPosts, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer
