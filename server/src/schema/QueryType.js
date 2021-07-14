import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { PostConnection } from '../modules/posts/PostType';

import * as PostLoader from '../modules/posts/PostLoader';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({
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