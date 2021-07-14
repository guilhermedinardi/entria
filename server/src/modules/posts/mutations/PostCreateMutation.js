import {GraphQLNonNull, GraphQLString} from 'graphql';
import { mutationWithClientMutationId, toGlobalId }  from 'graphql-relay';

import * as PostLoader from '../PostLoader';
import PostModel from '../PostModel'
import { PostConnection } from '../PostType' 

const mutation = mutationWithClientMutationId({
    name: 'PostCreate',
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
        try {
            const post = await PostModel.create({
                title,
                content,
                tag,
                link
            })
            return {
                post,
                success: 'Post created successfully',  
                error: null,
            }
        }catch (e) {
            return {
                post: null,
                success: '',
                error: e,
            }
        }
    },
    outputFields: {
        postEdge: {
            type: PostConnection.edgeType,
            resolve: async ({ post }) => {
                // Returns null if no node was loaded
                if (!post) {
                    return null;
                }
                return {
                    cursor: toGlobalId('Post', post._id),
                    node: post,
                }
            },
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error
        },
        success: {
            type: GraphQLString,
            resolve: ({ success }) => success
        },
    },
});

export default mutation