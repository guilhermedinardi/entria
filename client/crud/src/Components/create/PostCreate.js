import React, { useCallback, useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styled from 'styled-components'

import { default as usePostCreateMutation } from './PostCreateMutation'
  
const PostCreate = (props) => {
    const post = useFragment(
        graphql` 
            fragment PostCreate on Post {
                title
                content
                tag
                link
                id
            }
        `,
        props.post,
    ); 

const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [tag, setTag] = useState('')
const [link, setLink] = useState('') 

const [addTool] = usePostCreateMutation()

const handlePostCreate = useCallback(
    (PostCreateInput) => {
      addTool(PostCreateInput, post.id);
    },
    [addTool, post.id]
  )
return (
    <PostCreate>
        <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        title={"Name"}
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
        <button onClick={handlePostCreate(console.log('aqui adicionou'))}>
            +AddTool
        </button>
    </PostCreate>
    )
}
export default PostCreate