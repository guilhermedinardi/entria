import React, { useCallback } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay';

import Post from './Post'
import PostCreate from './create/PostCreate'

const PostHome = (props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment PostHome on Query
      @argumentDefinitions(first: { type: Int, defaultValue: 3 }, after: { type: String })
      @refetchable(queryName: "PostHomeQuery") {
        posts(first: $first, after: $after) @connection(key: "PostHome_posts"){
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
             ...PostList_viewer
             ...PostCreate_post
            }
          }
        }
      }
    `,
    props.query,
  )

  const { posts } = data;

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }
    loadNext(3);
  }, [isLoadingNext, loadNext]);

  return (
    <>
    <div>
      {posts.edges.map(({ node }) => (
          <Post key={node.id} post={node} />
        ))}
        <button onClick={loadMore}> Load More</button>
    </div>
    <PostCreate />
    </>
  )
  
}
export default PostHome