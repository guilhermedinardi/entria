import React, { useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay'
import styled from 'styled-components'

import Modal from './modal/Modal'
import PostUpdate from './update/PostUpdate'
import { default as useRemovePostMutation } from './PostDelete';

const PostItem = styled.div`
  background: #E7E7E7;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  .posts {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 15px;
    .post-title {
      color: #5173E3;
      margin-bottom: 10px;
    }
    .post-content {
      color: #363636;
      font-size: 0.8rem;
    }
    .post-tag{
      color: #363636;
      font-size: 0.8rem;
    }
    .post-link {
      font-size: 0.8em;
      text-align: left;
      margin-bottom: 5px;
      text-decoration: none;
      color: #9c9c9c;
      margin-top: auto;
      &:hover {
        color: #C1D53F;
      }
    }
    .posts-btn{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 10px;
      .btn-remove{
        border: none;
        border-radius: 15px;
        width: 50%;
        height: 5vh;
        background-color: #E64848;
        color: #ffffff;
        cursor: pointer;
        font-size: 0.8em;
        &:hover{
          background: #fff;
          color: #E64848;
        }
      } 
      .btn-update{
        border: none;
        border-radius: 15px;
        width: 50%;
        height: 5vh;
        background-color: #5173E3;
        color: #ffffff;
        cursor: pointer;
        font-size: 0.8em;
        &:hover{
          background: #ffffff;
          color: #5173E3;
        }
      }
    }
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
  const [show, setShow] = useState(false);

  return(
      <PostItem>
        <div className="posts">
          <h2 className="post-title">client/crud/src/Components/Post.js{post.title}</h2>
          <span className="post-content">{post.content}</span>
          <p className="post-tag">{post.tag}</p>
          <a href={post.link} className="post-link">{post.link}</a>
          <div className="posts-btn">
            <button
              className="btn-remove"
              onClick={() => {
                remove(post.id)
            }}> 
              Remover
            </button>
            <button 
              onClick={() => 
                setShow(!show)
              }
              className="btn-update"> 
                Update 
            </button>
          </div>
        </div>
        
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