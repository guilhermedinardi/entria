import React, { useCallback } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay';
import styled from 'styled-components'

import Post from './Post'

const Content = styled.div`
  margin: 0px auto;
`
const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-content: center;
  place-items: center;
`

const Button = styled.div `
  display: flex;
  justify-content: center;
`

const ButtonLoadMore = styled.button`
  border: none;
  border-radius: 20px;
  margin: 2em;
  width: 7em;
  height: 3vh;
  background-color: #F2AF29;
  font-size: 0.9em;
  color: #ffffff;
  cursor: pointer;
    &:hover{
      background: #ffffff;
      color: #161B33;
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
    <Content>
      <Home>
        {posts.edges.map(({ node }) => (
          <Post key={node.id} post={node} />
        ))}
      </Home>
      <Button>
        <ButtonLoadMore onClick={loadMore} className="btn-load-posts"> Load More</ButtonLoadMore>
      </Button>
    </Content>
  )
  
}
export default PostHome