import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField} from "graphql-relay";
 
const PostType = new GraphQLObjectType({
    name: 'Post', 
    description: 'Post Type',
    fields: () => ({
        id: globalIdField('Post'),
        _id: {
            type: GraphQLID,
            resolve: post => post._id
        },
        title: {
            type: GraphQLString,
            resolve: post => post.title,
        },
        content: {
            type: GraphQLString,
            resolve: post => post.content,
        },
        tag: {
            type: GraphQLString,
            resolve: post => post.tag,
        },
        link: {
            type: GraphQLString,
            resolve: post => post.link,
        },
    })
})
export default PostType

export const PostConnection = connectionDefinitions({
    nodeType: PostType
})