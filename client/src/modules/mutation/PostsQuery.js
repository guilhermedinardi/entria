import { graphql } from 'relay-hooks'

export default graphql `
query PostsQuery($title: String!, $content: String!, $tag: String!, $link: String!) {
    posts(title: " ", content: " ", tag: " ", link: " ") {
        node{
         ...Posts
        }
    }
}

fragment PostsQueryFragment on Post {
    title, content, tag, link
}
`