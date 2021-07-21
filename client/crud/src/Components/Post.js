import React, { useCallback } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment, useMutation } from 'react-relay'
import styled from 'styled-components'

import { PostDeleteMutation, postDeleteOptimisticResponse } from './PostDelete';

const PostItem = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  div {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
      color: #ffdd46;
      margin-bottom: 0px;
    }
    p {
      color: #797979;
      font-size: 0.9rem;
    }
    a {
      border-top: 1px solid #383838;
      text-align: center;
      padding: 10px;
      margin-bottom: 5px;
      text-decoration: none;
      color: #9c9c9c;
      margin-top: auto;
      -webkit-transition: all 300ms ease;
      -moz-transition: all 300ms ease;
      -ms-transition: all 300ms ease;
      -o-transition: all 300ms ease;
      transition: all 300ms ease;
      &:hover {
        color: #ffdd46;
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
  
  const postDeleteMutation = useMutation(PostDeleteMutation)

  const remove = useCallback(() => {
    const config = {
      variables: {
        input: {
          postId: post.id,
        },
      },
      optimisticResponse: post.id ? postDeleteOptimisticResponse(post) : 'error'
    }
    const mutationFn = post.id ? postDeleteMutation : 'not found' 
    
    console.log(remove)
    console.log(config)
    console.log(mutationFn)
    
  },[post])
  return(
    <PostItem>
      <div>
        <h2>{post.title}</h2>
        <span>{post.content}</span>
        <p>{post.tag.split(',')}</p>
        <a href={post.link}>{post.link}</a>
        <button onClick={() => remove()}> Remover
        </button>
      </div>
    </PostItem>
    )
}
export default Post