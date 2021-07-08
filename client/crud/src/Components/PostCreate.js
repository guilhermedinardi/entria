import { React, useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router";
import graphql from 'babel-plugin-relay/macro';
import { commitMutation, useLazyLoadQuery } from 'react-relay';
import Environment from '../relay/Environment'

const PostCreate = (props) => {
  const data = useLazyLoadQuery(
    graphql`
      query PostCreateQuery {
        posts{
          ...PostList_viewer   
        } 
      }
    `,
    {
      fetchPolicy: 'network-only'
    }
  )
  
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [link, setLink] = useState('') 

  const mutation = graphql`
  mutation PostCreateMutation($data: PostInput!){
    createPost(data: $data) {
      title
      content
      tag
      link
    }
  }
`
  const submit = () => {
    commitMutation(Environment, {
        mutation,
        variables:{ data: { title, content, tag, link }},
        
        onCompleted: (errors) => {
          if (errors) return console.log(errors);
          history.push('');
        },
        onError: (err) => console.error(err),
    });
  };
  
  return (
    <>
      <input 
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       title={"Name"}
       type={"text"}
       placeholder={"Enter tool"}
      />
      <input 
       value={content}
       onChange={(e) => setContent(e.target.value)}
       title={"Content"}
       type={"text"}
       placeholder={"Enter content tool"}
      />
      <input 
       value={tag}
       onChange={(e) => setTag(e.target.value)}
       title={"tag"}
       type={"text"}
       placeholder={"Enter tag tool"}
      />
      <input 
       value={link}
       onChange={(e) => setLink(e.target.value)}
       title={"Link"}
       type={"text"}
       placeholder={"Enter link tool"}
      />
      <button onClick={submit}>Adicionar</button>
    </>
  )
  
}

export default PostCreate