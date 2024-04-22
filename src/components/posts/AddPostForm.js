import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPost } from './postsSlice'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

//AddPostForm component lets users add a new post
//useState hook is used to declare title, content, addRequestStatus, and error
//useDispatch hook dispatches actions to Redux store
//onTitleChanged and onContentChanged functions update title and content states
//canSave variable is true if title, content, and addRequestStatus are not empty, we enable the save button
//when the save button is clicked, onSavePostClicked function is called and a new post is added
//return a section with a form to add a new post
//if there is no error and save button is clicked, the post is saved
export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

const canSave = Boolean(title) && Boolean(content) && Boolean(addRequestStatus === 'idle')
const onSavePostClicked = async () => {
    if (canSave) {
        try {
            setAddRequestStatus('pending')
            await dispatch(addNewPost({title, content})).unwrap()
            setTitle('')
            setContent('')
            setError(null)
        } catch (err) {
            console.error('Failed to save the post: ', err)
            setError('Error saving the post')
        } finally {
            setAddRequestStatus('idle')
        }
    }
}

return (
    <section>
        <div>
        <h2 class='mt-5 mb-5'>My blog posts</h2>
        </div>

        
        <form>
            <label htmlFor="postTitle" className='m-2'> Post Title:</label>
            <input 
                placeholder="Enter post title"
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged} 
            /><br></br>
            <label htmlFor="postContent" className='m-2'>Content:</label>
            <textarea
                placeholder="Enter post content"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged} 
            />
<button type="button" onClick={onSavePostClicked} disabled={!canSave} className='btn btn-success m-2'>
    Save Post
</button>
        </form>
        {error && <div>{error}</div>}
    </section>
)
}