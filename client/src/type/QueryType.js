import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { connectionArgs, fromGlobalId } from 'graphql-relay';

import PostType, { PostsConnection } from '../modules/PostType';
import { nodeField } from '../interface/NodeInterface';
import { PostLoader } from '../loader';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    node: nodeField,
    me: {
      type: PostType,
      resolve: (root, args, context) => (context.posts ? PostLoader.load(context, context.posts._id) : null),
    },
    user: {
      type: PostType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return PostLoader.load(context, id);
      },
    },
    users: {
      type: PostsConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => PostLoader.loadUsers(context, args),
    },
  }),
});