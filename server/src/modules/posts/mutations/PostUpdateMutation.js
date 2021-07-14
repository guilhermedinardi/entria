import {GraphQLNonNull, GraphQLString} from 'graphql';
import { mutationWithClientMutationId, toGlobalId }  from 'graphql-relay';

import * as PostLoader from '../PostLoader';
import PostModel from '../PostModel'
import { PostConnection } from '../PostType' 

const mutation = mutationWithClientMutationId({
    name: 'PostUpdate',
    inputFields: {
        id: {
            type: GraphQLNonNull(GraphQLString),
        },
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
    mutateAndGetPayload: async ({ id, title, content, tag, link }) => {
        const postUpdate = await PostModel.findByIdAndUpdate({ _id: id }, 
            { 
                title, 
                content, 
                tag, 
                link
            },
        )
        return {
            postUpdate,
            success: 'Post updated successfully',  
            error: null,
        }
    },
    outputFields: {
        PostUpdate: {
            type: PostConnection.edgeType,
            resolve: async ({ postUpdate }) => {
                console.log('Post Update', postUpdate)
                return {
                    cursor: toGlobalId('Update', postUpdate._id),
                    node: postUpdate,
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