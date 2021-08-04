import React, { useState } from 'react'
import styled from 'styled-components'

import { default as usePostUpdateMutation } from './PostUpdateMutation'
  
const PostUpdate = (props) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [link, setLink] = useState('') 

  const [update] = usePostUpdateMutation()

  const handlePostUpdate = (event) => {
    event.preventDefault()
    const payload = { 
      title,
      content,
      tag,
      link,
      postId: props.post
    }    
    update(payload)
  }
  return (
    <form onSubmit={handlePostUpdate}>
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
        Update
      </button>
    </form>
  )
}
export default PostUpdate