import {GraphQLNonNull, GraphQLString} from 'graphql';
import { mutationWithClientMutationId, toGlobalId }  from 'graphql-relay';

import PostModel from '../PostModel'
import PostType from '../PostType' 
import * as PostLoader from '../PostLoader';

const mutation = mutationWithClientMutationId ({
    name: 'PostDelete',
    inputFields: {
        _id: {
            type: GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async ({ _id, title, content, tag, link }) => {
        const postDelete = await PostModel.findOneAndDelete({ _id: _id })
        await postDelete.remove()

        return {
            postDelete,
            success: 'Post deleted with successfully',
            error: null,
        }
    },
    outputFields:{
        postDelete:{
            type: PostType,
            resolve: ({ postDelete }) => postDelete
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