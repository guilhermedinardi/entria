import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})
const PostModel = mongoose.model('Post', Schema)
export default PostModel
