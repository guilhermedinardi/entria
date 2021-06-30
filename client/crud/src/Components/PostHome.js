import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Environment from '../relay/Environment';

import PostList from './PostList';

class PostHome extends Component {
    render() {
        return (
            <QueryRenderer
            environment={Environment}
            query={PostQuery}
            render={({ error, props }) => {
                console.log('qr: ', error, props);
                  if (error) {
                    return <span>{error.toString()}</span>;
                  }else if (props) {
                    return <PostList posts={props.posts} />;
                  }
                  return <span>loading</span>
                }} />
        )
    }
}

const PostQuery = graphql`
    query PostHomeQuery {
      posts{
      ...PostList_viewer
    }
  }
`

export default PostHome