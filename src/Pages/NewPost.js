import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import DataContext from '../context/DataContext'
import { auth, db, } from '../Config/Firebase'
import { addDoc, collection } from 'firebase/firestore';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const { getPostData } = useContext(DataContext);
  const navigate = useNavigate();

  const postCollectionRef =collection(db, 'Post')

  const user = auth?.currentUser?.uid

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { userId:user, title: postTitle, datetime, body: postBody }; 
    try {
       await addDoc(postCollectionRef, newPost) 
      navigate('/');
      getPostData()
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost