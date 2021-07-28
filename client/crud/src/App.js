
import { React } from 'react';
import {  useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import PostHome from './Components/PostHome'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px 40px 15px;
`

const App = () => {
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
        ...PostHome
      }
    `,
  )
  return (
    <Container>
      <PostHome query={query}/>
    </Container>
  )
}
export default App;
