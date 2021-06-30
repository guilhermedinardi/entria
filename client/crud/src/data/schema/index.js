import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {PostQuery} from './queries/PostQuery';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      post: PostQuery
    },
  });
export const schema = new GraphQLSchema({
    query: Query
  });