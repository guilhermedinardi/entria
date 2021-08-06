import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RelayEnvironmentProvider } from 'react-relay'
import App from './App';

import env from './relay/Environment';

const Root = () => {
  return (
    <RelayEnvironmentProvider environment={env}>
     <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Route exact path="/" component={App} />
        </Suspense>
      </Router>
    </RelayEnvironmentProvider>
  );
};

export default Root;