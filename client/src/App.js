import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import Environment from './Environment';

const { Suspense } = React;

// Define a query
const PostsQuery = graphql`
  query posts {
      posts {
        _id
        title
        content
        tag
        link
      }
    }
`;

const preloadedQuery = loadQuery(Environment, PostsQuery, {
  
});

function App(props) {
  const data = usePreloadedQuery(PostsQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.posts.title}</p>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;