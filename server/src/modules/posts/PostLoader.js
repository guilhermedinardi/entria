import PostModel from './PostModel'

export function loadAll() {
  const posts = PostModel.find()
  return posts 
}