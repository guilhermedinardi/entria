
import { React, useState } from 'react';
import {  useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Modal from './Components/modal/Modal'
import PostCreate from './Components/create/PostCreate'
import PostHome from './Components/PostHome'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1140px;
  margin: 0px auto;
  padding: 20px;
  .post-create{
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      justify-content: space-between;
      align-items: center;
      .title{
        width: 60%;
        font-size: 1.5em;
        letter-spacing: 0.5px;
      }
      .btn-add-post{
        border: none;
        border-radius: 15px;
        width: 30%;
        height: 6vh;
        background-color: #5173E3;
        color: #ffffff;
        cursor: pointer;
        font-size: 1.5em;
        &:hover{
          background: #ffffff;
          color: #5173E3;
        }
      }
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
    <Container>
      <div className="post-create">
        <p className="title"> VUTTR <br/> 
          Very Userful Tools to Remember
        </p>
        <button onClick={() => setShow(!show)} type="button" className="btn-add-post"> Add + </button>
        { 
        show 
        ? 
        <Modal onClose={() => setShow(!show)}> 
          <PostCreate /> 
        </Modal>
        : 
        null 
        }
      </div>  
      <PostHome query={query}/>
    </Container>
  )
}
export default App;
