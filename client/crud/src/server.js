import graphQLHTTP from 'graphql';

import { schema } from './data/schema.graphql'
import App from './App'

const APP_PORT = 3000;

App.use(
    '/',
    graphQLHTTP({
      schema: schema,
      pretty: true,
    }),
);
  
App.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});
