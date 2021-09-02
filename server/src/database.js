import mongoose from 'mongoose';
import { schema } from './schema/schema';
import { config } from './config'

const connectDatabase = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.connection
        .on('error', error => reject(error))
        .on('close', () => console.log('Database connection closed.'))
        .once('open', () => resolve(mongoose.connections[0]));

        mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        });
    });
};

export default connectDatabase