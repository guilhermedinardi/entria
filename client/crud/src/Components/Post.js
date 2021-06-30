import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { Link } from "react-router-dom";
import { createFragmentContainer } from 'react-relay'
import styled from 'styled-components'

const PostItem = styled.div`
  background: #26262d;
  display: flex;
  flex-direction: column;
  div {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
      color: #ffdd46;
      margin-bottom: 0px;
    }
    p {
      color: #797979;
      font-size: 0.9rem;
    }
    a {
      border-top: 1px solid #383838;
      text-align: center;
      padding: 10px;
      margin-bottom: 5px;
      text-decoration: none;
      color: #9c9c9c;
      margin-top: auto;
      -webkit-transition: all 300ms ease;
      -moz-transition: all 300ms ease;
      -ms-transition: all 300ms ease;
      -o-transition: all 300ms ease;
      transition: all 300ms ease;
      &:hover {
        color: #ffdd46;
      }
    }
  }
`

class Post extends Component {
  render() {
    return (
      <PostItem>
        <div>
          <h2>{ this.props.title } </h2>
          <p>{ this.props.content } </p>
          <p>{ this.props.tag } </p>
          <Link to={`/post/${this.props.id}`} >{this.props.link}</Link>
        </div>
      </PostItem>
    )
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    title
    content
    tag
    link
  }
`)