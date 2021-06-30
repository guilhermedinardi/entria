import React, { Component } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
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

class PostList extends Component {
  render() {
    return (
      <StyledPostList>
        {this.props.posts.edges.map(({node}) => 
          <Post key={node._id} post={node} /> 
        )}
      </StyledPostList>
    )
  }
}

export default createFragmentContainer(PostList, graphql`
  fragment PostList_viewer on Post {
        ...Post_post
    }   
`)