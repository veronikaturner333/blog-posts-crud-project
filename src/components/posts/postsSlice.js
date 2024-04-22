import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

//fetching, adding, deleting, and updating posts with axios
//api created with mockapi.io
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://661c93b2e7b95ad7fa6a92df.mockapi.io/post');
  
  return response.data;
});

//addNewPost is an async thunk that takes an initialPost object as an argument
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const response = await axios.post('https://661c93b2e7b95ad7fa6a92df.mockapi.io/post', initialPost);
  return response.data;
});

//handleDelete is an async thunk that takes an id as an argument
export const handleDelete = createAsyncThunk('posts/handleDelete', async (id) => {
  const response = await axios.delete(`https://661c93b2e7b95ad7fa6a92df.mockapi.io/post${id}`);
  return response.data;
});

//updatePost is an async thunk that takes an object with id, title, and content as an argument
export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, title, content }) => {
  await axios.put(`https://661c93b2e7b95ad7fa6a92df.mockapi.io/post${id}`, {
    title,
    content,
  });
  return { id, title, content };
});

//createSlice function generates a slice object that contains the initial state...
//reducer functions, and action creators
//manages list of posts, fetching, addiing, deleting, and updating posts
//takes object as an argument with name (posts), initialState, reducers, and extraReducers
//extraReducers field is used to handle actions generated by createAsyncThunk function
//fetchPosts, addNewPost, handleDelete, and updatePost are all async thunks for fetching, adding...
// deleting, and updating posts by finding it by id
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(handleDelete.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleDelete.fulfilled, (state, action) => {
        const id = action.payload.id;
        state.posts = state.posts.filter((post) => post.id !== id);
        state.status = 'succeeded';
      })
      .addCase(handleDelete.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, content } = action.payload;
        const existingPost = state.posts.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.content = content;
        }
        state.status = 'succeeded';
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = "Update failed"
        state.error = action.error.message;
      })
    }
  })

export default postsSlice.reducer;