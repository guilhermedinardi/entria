import PostModel from './PostModel'

export async function loadAll() {
    const posts = await PostModel('posts')
}