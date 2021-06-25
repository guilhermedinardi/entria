import { graphql } from "relay-hooks"

export default  graphql `
mutation PostsMutation($title: String!, $content: String!, $tag: String!, $link: String!) {
  posts(title: title, content: content, tag: tag, link: link) {
    posts {
      node{
          ...posts
        }
      }
    }
  }
`