import React, { useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay'
import styled from 'styled-components'

import Modal from './modal/Modal'
import PostUpdate from './update/PostUpdate'
import { default as useRemovePostMutation } from './PostDelete';

const PostItem = styled.div`
  background: #F7F7F3;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
`
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 15px;
`

const Title = styled.h2`
  color: #000000;
  margin-bottom: 10px;
`

const Paragraph = styled.div`
  color: #161B33;
  font-size: 0.8rem;
`

const Link = styled.a`
  font-size: 0.8em;
  text-align: left;
  margin-bottom: 5px;
  text-decoration: none;
  color: #A69CAC;
  margin-top: auto;
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  gap: 10px;
`

const ButtonRemove = styled.button`
  border: none;
  border-radius: 15px;
  width: 10em;
  height: 3vh;
  background-color: #AD343E;
  color: #ffffff;
  cursor: pointer;
  font-size: 1em;
  &:hover{
    background: #fff;
    color: #AD343E;
  }
`

const ButtonUpdate = styled.button`
  border: none;
  border-radius: 15px;
  width: 10em;
  height: 3vh;
  background-color: #F2AF29;
  color: #ffffff;
  cursor: pointer;
  font-size: 1em;
  &:hover{
    background: #ffffff;
    color: #0D0C1D;
  }
`


const Post = (props) =>{
  const post = useFragment(graphql` 
    fragment PostList_viewer on Post {
      title
      content
      tag
      link
      id
    }
  `,
  props.post,
  ); 

  const [remove] = useRemovePostMutation() 
  const [show, setShow] = useState('')

  return(
      <PostItem>
        <Posts>
          <Title>{post.title}</Title>
          <Paragraph>
            {post.content}<br/>
            {post.tag}
          </Paragraph>
          <Link href={post.link}> {post.link}</Link>
          <Actions>
            <ButtonRemove onClick={() => {remove(post.id)}}> Remove </ButtonRemove>
            <ButtonUpdate onClick={() => setShow(!show)}> Update </ButtonUpdate>
          </Actions>
        </Posts>
        {
        show
        ?
          <Modal onClose={() => setShow(!show)}>
            <PostUpdate post={post.id} /> 
          </Modal>
        :
        null
        }
      </PostItem>
  )  
}
export default Post