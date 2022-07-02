import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import apiClient from "./../../utils/apiClient";

const url=apiClient.defaults.baseUrl;
export const getPosts = createAsyncThunk(
    "get/posts",
    async (values, getState) => {
        const data = apiClient.get(`${url}/posts`).catch((e)=>{
            return e
        })
        return data
    }
);

export const getPostById = createAsyncThunk(
    "get/postById",
    async (id, getState) => {
        const data = apiClient.get(`${url}/posts/${id}`).catch((e)=>{
            return e
        })
        return data
    }
);





const postSlice= createSlice({
    name: "post",
    initialState: {
        posts: [],
        postById:{},
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload?.data;
            state.loading = false;
            state.error = null;
        },
        [getPosts.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [getPostById.fulfilled]: (state, action) => {
            state.postById = action.payload?.data;
            state.loading = false;
            state.error = null;
        },
        [getPostById.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getPostById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    },
});
export const {  } = postSlice.actions;

export default postSlice.reducer;