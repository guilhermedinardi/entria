import React, { useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';

import { default as usePostCreateMutation } from './PostCreateMutation'
  
const PostCreate = (props) => {
    const post = useFragment(
        graphql` 
            fragment PostCreate_post on Post {
                title
                content
                tag
                link
                id
            },
        `,
        
        props.post,
    ); 

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tag, setTag] = useState('')
    const [link, setLink] = useState('') 

    const [addTool] = usePostCreateMutation()

    const handlePostCreate = (event) => {
        event.preventDefault()
        const payload = { 
            title,
            content,
            tag,
            link,
        }    
        addTool(payload)
    }
    return (
        <form onSubmit={handlePostCreate}>
            <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title={"title"}
            type={"text"}
            placeholder={"Enter tool"}
            />
            <input 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            title={"Content"}
            type={"text"}
            placeholder={"Enter content tool"}
            />
            <input 
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            title={"tag"}
            type={"text"}
            placeholder={"Enter tag tool"}
            />
            <input 
            value={link}
            onChange={(e) => setLink(e.target.value)}
            title={"Link"}
            type={"text"}
            placeholder={"Enter link tool"}
            />
            <button type='submit'>
                +AddTool
            </button>
        </form>
    )
}
export default PostCreate