import { ApolloServer } from 'apollo-server';
import { schema } from './schema/schema';
import { config } from './config'
import connectDatabase from './database'
(async () => {
    await connectDatabase();
    const server = new ApolloServer({ schema })
    server.listen(config.PORT, () => {
        console.log(`server running on http://localhost:${config.PORT}`);
    });
})()
