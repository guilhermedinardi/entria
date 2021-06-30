import { GraphQLString } from 'graphql';
import GraphQLPost from '../node';


const fetchPost = (posts) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.find((item) => item.post === posts))
    }, 2000);
  })
 }

const PostQuery = {
  type: GraphQLPost,
  args: {
    title: {type: GraphQLString},
    content: {type: GraphQLString},
    tag: {type: GraphQLString},
    link: {type: GraphQLString},
  },
  resolve: (posts) => {
    return fetchPost(posts)
  },
}

export {PostQuery}