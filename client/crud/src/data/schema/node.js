import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'; 

const GraphQLPost = new GraphQLObjectType({
    name: 'Post',
    fields: {
        posts: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (_) => _.post,
        }
    }
})

export {GraphQLPost}