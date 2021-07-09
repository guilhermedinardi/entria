import PostModel from './PostModel'

export function loadAll() {
  const post = PostModel
  if(!post){
    return null
  }
  return post
}