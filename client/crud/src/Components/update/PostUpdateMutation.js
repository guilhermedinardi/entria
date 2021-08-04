import graphql from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'
import { useCallback } from 'react'

const mutation = graphql `
  mutation PostUpdateMutation($input: PostUpdateInput!){
    PostUpdateMutation(input: $input){  
      postEdge {
        node {
          title
          content
          tag
          link
          id
        },
      },
      success
      error
    }
  }
`;

export default function usePostUpdateMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (postUpdateMutation) => {
        const input = postUpdateMutation

        return commit({
          variables: { 
            input 
          },
          updater: (store) => {

            const payload = store.getRootField("PostUpdateMutation"); 
            if(!payload){
              return;
            }
            
            const postRecord = store.get(postUpdateMutation.postId)
            
            postRecord.setValue(postUpdateMutation.title, 'title')
            postRecord.setValue(postUpdateMutation.content, 'content')
            postRecord.setValue(postUpdateMutation.tag, 'tag')
            postRecord.setValue(postUpdateMutation.link, 'link')
          },
        });
      },
      [commit]
    )
  ];
}
