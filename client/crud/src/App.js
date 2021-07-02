
import { React, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RelayEnvironmentProvider } from 'react-relay';
import styled from 'styled-components'
import Environment from './relay/Environment'
import PostHome from './Components/PostHome'
import CreatePost from './Components/CreatePost';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px 40px 15px;
`

const App = () =>{
  
    return (
      <RelayEnvironmentProvider environment={Environment}>
        <Router>
          <Suspense fallback={<div>Carregando...</div>}>
            <div>
              <Container>
                <Route exact path="/" component={PostHome} />
                <Route exact path="/edit" component={CreatePost} />
              </Container>
            </div>
          </Suspense>
        </Router>
      </RelayEnvironmentProvider>
    )

}

export default App;
