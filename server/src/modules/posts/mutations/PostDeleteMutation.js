import {GraphQLNonNull, GraphQLString} from 'graphql';
import { mutationWithClientMutationId, toGlobalId, fromGlobalId }  from 'graphql-relay';

import PostModel from '../PostModel'
import PostType from '../PostType' 
import * as PostLoader from '../PostLoader';

const mutation = mutationWithClientMutationId ({
    name: 'PostDelete',
    inputFields: {
        postId: {
            type: GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async ({ postId }) => {
        const { id } = fromGlobalId(postId)
        const postDelete = await PostModel.findByIdAndDelete({ _id: id })
    
        return {
            id: postDelete,
            success: 'Post deleted with successfully',
            error: null,
        }
    },
    outputFields:{
        deleteId:{
            type: GraphQLString,
            resolve: async ({ id }) => {
                return toGlobalId('Delete', id._id)
            }
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error
        },
        success: {
            type: GraphQLString,
            resolve: ({ success }) => success
        },
    }
})
export default mutation