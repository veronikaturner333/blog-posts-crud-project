import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {AddPostForm} from '../components/posts/AddPostForm';
import {PostsList} from '../components/posts/PostsList';
import 'bootstrap/dist/css/bootstrap.css';

//posts page will feature the add post form and the posts list
export function Posts() {
    return (
        <div className = 'text-center'>
            <AddPostForm />
            <PostsList />
        </div>
    )
}

export default Posts;