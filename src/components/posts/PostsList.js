import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, handleDelete } from './postsSlice'
import { UpdatePostForm } from './UpdatePostForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

//postExcerpt component will display the title and content of a post
//accepts a post object as a prop
//inside the component, two pieces of state are declared (showEditForm and updateId)
//useDispatch hook dispatches actions to Redux store
//handleUpdate function is declared, taking id as parameter
//sets showEditForm to true and updateId to id so updateEditForm should show
const PostExcerpt = ({ post }) => {
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateId, setUpdateId] = useState('')
    const dispatch = useDispatch()

    const handleUpdate = (id) => {
        setUpdateId(id);
        setShowEditForm(true);
      }
      
    return (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <h5>{post.content}</h5>

            {showEditForm && updateId === post.id ? (
                <UpdatePostForm
                    post={post}
                    setShowEditForm={setShowEditForm}
                />
                ) : (
                <button onClick={() => handleUpdate(post.id)} className ='btn btn-warning m-2'>
                    Update
                </button>
            )}

            <button onClick={() => dispatch(handleDelete(post.id))} className ='btn btn-danger'>Delete</button>
        </article>
    )
}
//PostList fetches and displays list of posts
//useDispatch hook dispatches actions to Redux store
//useSelector hook extracts data from Redux store state
//useEffect hook dispatches fetchPost when status is idle, will run when status or dispatch changes
//content variable is assigned based on status
//we finally return a section with content
export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    console.log(posts)
    console.log("The PostsList rendered")
    const status = useSelector(state => state.posts.status)
    console.log(status)
    const error = useSelector(state => state.posts.error)
    console.log(error)
    
    useEffect(() => {
        status === 'idle' && dispatch(fetchPosts())
    },[status, dispatch])

let content
    
status === 'loading' ? (
    content = <h1>Loading...</h1>
) : status === 'succeeded' ? (
    content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
) : (
    content = <div>Error: {error}</div>
)

    return (
        <section className='mt-5'>  
            {content}
        </section>
    )
}