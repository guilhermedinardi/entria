import { React, useState } from 'react';
import {  useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Modal from './components/modal/Modal'
import PostCreate from './components/create/PostCreate'
import PostHome from './components/PostHome'
import styled from 'styled-components'

const Section = styled.div`
  font-family: 'Work Sans', sans-serif;
  margin: 0px auto;
  padding: 20px;
  max-width: 1280px;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
`
const Title = styled.p`
  width: 50%;
  font-size: 1.2em;
  letter-spacing: 0.5px;
  color: #161B33;
`
const ButtonAddPost = styled.button`
  border: none;
  border-radius: 15px;
  width: 6em;
  height: 5vh;
  background-color: #F7F7F3;
  color: #000000;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 700;
  &:hover{
    background: #ffffff;
    color: #161B33;
  }
`

const App = () => {
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
        ...PostHome
      }
    `,
  )

  const [show, setShow] = useState(false); 

  return (
    <Section>
      <Container>
        <Title> VUTTR <br/> 
          Very Userful Tools to Remember
        </Title>
        <ButtonAddPost onClick={() => setShow(!show)} type="button"> Add + </ButtonAddPost>
        { show
        ?
          <Modal onClose={() => setShow(!show)}> 
            <PostCreate /> 
          </Modal> 
        :
        null
        }
      </Container>  
      <PostHome query={query}/>
    </Section>
  )
}
export default App;
