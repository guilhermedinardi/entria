import React, { useState } from 'react'
import styled from 'styled-components'

import { default as usePostUpdateMutation } from './PostUpdateMutation'
  
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  height: 2em;
  font-size: 1em;
  margin-bottom: 1.3em;
  margin-top: 0.4em;
  border-radius: 5px;
  border: 1px solid #B8B8B8;
  background-color: #b8b8b836;
`

const Content = styled.textarea`
  width: 100%;
  height: 20%;
  font-family: inherit;
  font-size: 1em;
  margin-bottom: 1.3em;
  margin-top: 0.4em;
  border-radius: 5px;
  border: 1px solid #B8B8B8;
  background-color: #b8b8b836;
  color: #000000;
`

const Button = styled.button`
  border: none;
  border-radius: 15px;
  width: 10em;
  height: 2.5em;
  background-color: #474747;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.9em;
  align-self: center;
  &:hover{
    background: #ffffff;
    color: #474747;
  }
`

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
    <Form onSubmit={handlePostUpdate}>
      
      <Input 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      title={"title"}
      type={"text"}
      placeholder={"Title"}
      />
        
      <Content 
      value={content}
      onChange={(e) => setContent(e.target.value)}
      title={"Content"}
      type={"text"}
      placeholder={"Content"}
      />
      
      <Input 
      value={tag}
      onChange={(e) => setTag(e.target.value)}
      title={"tag"}
      type={"text"}
      placeholder={"Tag"}
      />
      
      <Input 
      value={link}
      onChange={(e) => setLink(e.target.value)}
      title={"Link"}
      type={"text"}
      placeholder={"Link"}
      />
      <Button type='submit'>
        Update
      </Button>
    </Form>
  )
}
export default PostUpdate