
import { React, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'

import PostHome from './Components/PostHome'
import PostDetail from './Components/PostDetail';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px 40px 15px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Route exact path="/" component={PostHome} />
            <Route exact path="/edit/:id" component={PostDetail} />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
