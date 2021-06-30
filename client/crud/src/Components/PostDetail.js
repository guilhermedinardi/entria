import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Environment } from '../relay'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-gap: 30px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  h1 {
    color: #ffdd46;
    margin-top: 0px;
  }
  p {
    color: #797979;
  }
  a {
    color: #fff;
    @media (max-width: 767px) { 
      display: none;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
  }
`

const StyledInfo = styled.div`
  padding: 0px 20px;
  background: #282834;
  h2 {
    font-size: 1rem;
    color: #fff;
  }
  p {
    font-size: 0.9rem;
  }
`

class PostDetail extends Component {
  render() {
    return (
      <QueryRenderer 
      environment={Environment}
      query={DetailQuery}
      variables={{id: this.props.match.params.id}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <Post props={props.viewer.Post}/>
        }
        return <span>Carregando</span>
      }}/>
    )
  }
}

const Post = ({props}) => (
  <Wrapper>
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
      <Link to="/">Back</Link>
    </div>
    <div className="info">
      <img src={ props.imageUrl } alt={props.title}/>
      { props.occupation && <Info title='Occupation' props={props.occupation} /> }
      { props.nickname && <Info title='Nickname(s)' props={props.nickname} /> }
    </div> 
  </Wrapper>
)

const Info = ({ title, props}) => (
  <StyledInfo>
    <h2>{ title }</h2>
    <p>{ props }</p>
  </StyledInfo>
)

const DetailQuery = graphql`
  query PostDetailQuery {
    posts {
        title
        content
        tag
        link
    }
  }
`

export default PostDetail