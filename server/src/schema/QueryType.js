import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import { connectionArgs, connectionFromArray, globalIdField } from 'graphql-relay';
import { PostConnection, PostEdge } from '../modules/posts/PostType';
import * as PostLoader from '../modules/posts/PostLoader';
import { nodeField } from '../modules/node/typeRegister'

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({
        node: nodeField,
        posts: {
            type: GraphQLNonNull(PostConnection.connectionType),
            args: {
                ...connectionArgs
            },
            resolve: async (_, args, context) => {
                const data = await PostLoader.loadAll()
                return connectionFromArray(data, args)
            }
        }
    })
})
export default QueryType