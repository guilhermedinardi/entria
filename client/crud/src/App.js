
import { React } from 'react'

import {  RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Environment from './relay/Environment';

import { AppQuery } from './__generated__/AppQuery.graphql';


const App = () => {
const appQuery = useLazyLoadQuery <AppQuery>
graphql `
  query AppQuery{
    posts {
      title
      content
      tag
      link
    }
  }
`
  const posts = appQuery
  console.log(posts)
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <h2>{posts}</h2>
      <p>TODO</p>
    </RelayEnvironmentProvider>
  );
}

export default App;
