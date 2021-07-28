import {Environment, Network, RecordSource, Store} from 'relay-runtime';

function fetchQuery(operation, variables) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Auth Headers goes here
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
  
}

const env = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
export default env