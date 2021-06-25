import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import { schema } from './data/schema'
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import Environment from './Environment';

const { Suspense } = React;


console.log(schema)
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={'Loading...'}>
        <p></p>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;