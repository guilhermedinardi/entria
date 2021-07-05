import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

import Post from './Post'

const PostHome = () =>{
  const data = useLazyLoadQuery(PostQuery)
  return (
    <div>
      {data.posts.map(post =>(
        <Post key={post.__id} post={post}></Post>
      ))}
    </div>
  )
  
}

const PostQuery = graphql`
    query PostHomeQuery {
      posts{
        ...PostList_viewer   
      }
    }
`

export default PostHome