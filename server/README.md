
# Server
in this folder you will find the server developed to create the API in GraphQL


## Getting Started

```bash
    git clone https://github.com/guilhermedinardi/entria
```

Go to the project directory

```bash
    cd server
```

Install dependencies

```bash
    yarn install
```

Start the server

```bash
  yarn dev
```
see the graphql playground on localhost
http://localhost:4000

## Queries
### User 
```gql 
query {
    users {
        _id
        firstName
        lastName
        active
    }
} 
```
 ### Posts
```gql
query {
    posts {
        _id
        title
        content
        tag
        link
    }
}
```
## Mutation
### Create User
```gql
mutation{
	createUser(data: {
    firstName: "guilherme",
    lastName: "dinardi",
    active: true
  }) {
    _id
    firstName
    lastName
    active
  }
}
```
### Delete User
```gql
mutation {
  deleteUser (id: "60d258944fa1a843680accce")
}
```
### Update User
```gql
mutation {
  updateUser(id: "60d4f7b442c36b47b25bd439", data:{
    firstName: "Eduardo",
    lastName: "Silva",
    active: false
  }) {
    firstName
    lastName
    active
  }
}
```
### Create Post
```gql
mutation {
  createPost (data: {
    title: "Figma",
    content: "Tool for designer UI",
    tag: "tool desing",
    link: "https://figma.com"
  }) {
    title
  	content
    tag
    link
  }
}
```
### Delete Post
```gql
mutation {
  deletePost(id:"60d4f8f642c36b47b25bd443")
}
}
```
### Create Post
```gql
mutation {
  updatePost (id:"60d25b164fa1a843680accdd", data:{
		title: "Github",
    content: "Code version",
    tag: "tool dev",
    link: "https://github.com"
  }) {
    title
    content
    tag
    link
  }
}

```