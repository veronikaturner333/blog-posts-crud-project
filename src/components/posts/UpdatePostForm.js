import { useState } from 'react';
import { updatePost } from './postsSlice';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

//UpdatePostForm component will allow users to update the title and content of a post
//takes two props: post and setShowEditForm
//post is the post object that the user wants to update
//setShowEditForm is a function that controls visibility of UpdatePostForm component
//inside updatePostForm, two states are title and content, initialized with title and content of the post passed in as a prop
//useDispatch hook used to dispatch actions to the store
//canSave variable is true if title and content are not empty
//onUpdatePostClicked function is called when the update button is clicked
//calls dispatch to update the post and setShowEditForm is hidden
//return a form with input fields for title and content, and buttons to update or cancel if we no longer want to update the post
export const UpdatePostForm = ({ post, setShowEditForm }) => {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const dispatch = useDispatch()

  const canSave = Boolean(title) && Boolean(content);

  const onUpdatePostClicked = async (e) => {
    e.preventDefault()
    if (canSave) {
        dispatch(updatePost({ id: post.id, title: title, content: content }))
        setShowEditForm(false)
    }
  }
  return (
    <form onSubmit={onUpdatePostClicked}>
      <label htmlFor="postTitleEdit">Title</label>
      <input  
        id="postTitleEdit"
        name="postTitleEdit"
        placeholder="Edit your title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="postContentEdit">Content</label>
      <textarea  
      id="postContentEdit"
      name="postContentEdit"
        placeholder="Edit your content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit" disabled={!canSave} class='btn btn-success m-1'>
        Update
      </button>
      <button type="button" onClick={() => setShowEditForm(false)}class='btn btn-danger m-1'>
        Cancel
      </button>
    </form>
  );
};

export default UpdatePostForm