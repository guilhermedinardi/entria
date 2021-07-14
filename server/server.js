import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { schema } from './src/schema/schema';


function startServer() {
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const server = new ApolloServer({ schema })
    server.listen().then(({ url }) => console.log(`🔥 server started at ${url}`))
}

export default startServer;