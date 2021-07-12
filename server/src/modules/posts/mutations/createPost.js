import {GraphQLNonNull, GraphQLString} from 'graphql';
import { mutationWithClientMutationId, toGlobalId, connectionFromArray }  from 'graphql-relay';

import * as PostLoader from '../PostLoader';
import PostModel from '../PostModel'
import { PostConnection } from '../PostType' 

const load = async (context, id) => {
    if (!id) {
      return null;
    }

    try {
      const data = await context.dataloaders.load(id.toString());

      if (!data) {
        return null;
      }

      const filteredData = await viewerCanSee(context, data);

      return filteredData ? (new Wrapper(filteredData)) : null;
    } catch (err) {
      return null;
    }
  };

const mutation = mutationWithClientMutationId({
    name: 'createPost',
    inputFields: {
        title: {
            type: GraphQLNonNull(GraphQLString),
        },
        content: {
            type: GraphQLNonNull(GraphQLString),
        },
        tag: {
            type: GraphQLNonNull(GraphQLString),
        },
        link: {
            type: GraphQLNonNull(GraphQLString),
        },
    },
    mutateAndGetPayload: async ({ title, content, tag, link }) => {

        const post = await new PostModel({
            title,
            content,
            tag,
            link
        }).save()

        return {
            id: post._id
        };
    },
    outputFields: {
        postEdge: {
            type: PostConnection.edgeType,
            resolve: async ({ id }, _, context) => {
                // Load new edge from loader
                const post = await PostLoader.load(context, id);

                console.log(context, id);
                // Returns null if no node was loaded
                if (!post) {
                return null;
                }
                return {
                cursor: toGlobalId('Post', post._id),
                node: post,
                };
            },
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error
        },
        success: {
            type: GraphQLString,
            resolve: ({ success }) => success
        }
    },
});
console.log(mutation)
  
export default mutation