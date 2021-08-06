import React, { useCallback } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay';
import styled from 'styled-components'

import Post from './Post'

const Home = styled.div`
  .home{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
  }
  .content-btn{
    display: flex;
    justify-content: center;
    .btn-load-posts{
      border: none;
      border-radius: 20px;
      margin: 2em;
      width: 20%;
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
`

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
    <Home>
      <div className="home">
        {posts.edges.map(({ node }) => (
          <Post key={node.id} post={node} />
        ))}
      </div>
      <div className="content-btn">
        <button onClick={loadMore} className="btn-load-posts"> Load More</button>
      </div>
    </Home>
  )
  
}
export default PostHome