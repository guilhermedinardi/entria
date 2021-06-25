import {  GraphQLObjectType, GraphQLSchema } from 'graphql'

import { QueryType } from './type/QueryType'
import { PostsMutation } from './modules/mutation/PostType'


export const schema = new GraphQLSchema ({
    query: QueryType,
    mutation: PostsMutation
})