import graphQLHTTP from 'graphql';

import { schema } from './data/schema.graphql'

const APP_PORT = 3000;

const app = ''

app.use(
    '/',
    graphQLHTTP({
      schema: schema,
      pretty: true,
    }),
);
  
app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});
