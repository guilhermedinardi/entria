import { React, useState } from 'react';
import {  useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Modal from './Components/modal/Modal'
import PostCreate from './Components/create/PostCreate'
import PostHome from './Components/PostHome'
import styled from 'styled-components'

const Section = styled.div`
  font-family: 'Work Sans', sans-serif;
  max-width: 1140px;
  margin: 0px auto;
  padding: 20px;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.p`
  width: 60%;
  font-size: 1.5em;
  letter-spacing: 0.5px;
  color: #161B33;
`
const ButtonAddPost = styled.button`
  border: none;
  border-radius: 15px;
  width: 10em;
  height: 2.5em;
  background-color: #A69CAC;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.9em;
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
