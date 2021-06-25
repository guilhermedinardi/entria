import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { connectionDefinitions } from '../../core/connection/CustomConnectionType';
import { registerType, nodeInterface } from '../../interface/NodeInterface';

const PostType = registerType(
  new GraphQLObjectType({
    name: 'posts',
    description: 'posts data',
    fields: () => ({
      id: globalIdField('posts'),
      title: {
        type: GraphQLString,
        resolve: posts => posts.title,
      },
      content: {
        type: GraphQLString,
        resolve: posts => posts.content,
      },
      tag: {
        type: GraphQLBoolean,
        resolve: posts => posts.tag,
      },
    }),
    interfaces: () => [nodeInterface],
  }),
);

export default PostType;

export const PostsConnection = connectionDefinitions({
    name: 'posts',
    nodeType: GraphQLNonNull(PostType),
  });