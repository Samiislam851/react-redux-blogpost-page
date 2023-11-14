import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const onTitleChange = e => setTitle(e.target.value)
    const [content, setContent] = useState('');
    const onContentChange = e => setContent(e.target.value)
    console.log(title, content);

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(
                postAdded(
                  
                    title,
                    content
                
                )
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <div>
            <h2>Add new Post</h2>
            <form onSubmit={formSubmit}>

                <label htmlFor="postTitle"> Post Title: </label> <input type="text" name="postTitle" onChange={onTitleChange} value={title} id="postTitle" />


                <label htmlFor="postContent"> Post Content: </label> <input type="text"
                    name="postContent"
                    onChange={onContentChange}
                    value={content} id="postContent" />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default AddPostForm;