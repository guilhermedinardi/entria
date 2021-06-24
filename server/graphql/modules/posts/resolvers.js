import Post from '../../../models/Post';

export default {
    Query: {
        posts: () => Post.find(),
        post: (_, { id }) => Post.findById(id),

    },
    Mutation: {
        createPost: (_, { data }) => Post.create(data),
        updatePost: (_, { id, data }) => Post.findByIdAndUpdate(id, data),
        deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
    },
}