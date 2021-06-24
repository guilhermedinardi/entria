async function fetchGraphQL(text, variables) {
   
    const response = await fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  
    return await response.json();
  }
  
  export default fetchGraphQL;