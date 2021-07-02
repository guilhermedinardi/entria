import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';

 const CreatePost = () => {
  const dataCreate = useMutation(PostUpdate);
  
  return (
    <input type="text"/>
  )
}

const PostUpdate = graphql`
  mutation CreatePostMutation($data: PostInput!){
    createPost(data: $data) {
      title,
      content,
      tag,
      link
    }
  }   
`

export default CreatePost