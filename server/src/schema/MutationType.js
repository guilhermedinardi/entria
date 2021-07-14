import { GraphQLObjectType } from 'graphql'

import PostMutation from '../modules/posts/mutations'

const MutationType = new GraphQLObjectType({ 
    name: 'Mutation',
    fields: () => ({
        ...PostMutation
    })
})
export default MutationType