import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const searchPost = createAsyncThunk('post/searchPosts', async (searchTerm) => {
    const res = await axios.get(`https://www.reddit.com/search.json?q=${searchTerm}&raw_json=1&sort=new&limit=25&include_over_18=off`)
    .then(res => res.data.data)
    .then(json => {
        return json.children.map(child => child.data)
    })
    console.log(res)
    return res
})

const initialState = {
    loading: false,
    searchedPosts: [],
    error: ''
}

const searchPostSliceReducer = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
        builder.addCase(searchPost.pending, state => {
            state.loading = true
        })

        builder.addCase(searchPost.fulfilled, (state, action) => {
            state.loading = false
            state.searchedPosts = action.payload
            state.error = ''
        })

        builder.addCase(searchPost.rejected, (state, action) => {
            state.loading = false
            state.searchedPosts = []
            state.error = action.error.message
        })
    }
})

export default searchPostSliceReducer.reducer