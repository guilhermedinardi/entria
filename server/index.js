import startServer from '../server/server'
import typeDefs from '../server/graphql/typeDefs'
import resolvers from '../server/graphql/resolvers'

startServer({ typeDefs, resolvers })