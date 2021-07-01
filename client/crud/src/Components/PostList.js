import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styled from 'styled-components';

import Post from './Post';

const StyledPostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px 15px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const PostList = (props) => {
  const postList = useFragment(graphql `
    fragment PostList_viewer on Post {
        ...Post_post
    }   
  `,
  props.postList,
  )

  return (
    <StyledPostList>
        <Post key={postList} postList={postList} /> 
    </StyledPostList>
  )
}
export default PostList