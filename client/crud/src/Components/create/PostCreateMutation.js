import { useCallback } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation PostCreateMutation($input: PostCreateInput!){
    PostCreateMutation(input: $input) {
      postEdge{
        node{
          title
          content
          tag
          link
        }
      }
    }
  }
`
 function sharedUpdater(
  store,
  edge
) { 
  const connection = ConnectionHandler.getConnection(
    store.getRoot(), 
    "PostHome_posts"
  );

  if (!connection) {
    return;
  }
  ConnectionHandler.insertEdgeAfter(connection, edge);
} 

let tempID = 0;

export default function usePostCreateMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (postCreateInput) => {
        const input = postCreateInput

        return commit({
          variables: {
            input
          }, 
          updater: (store) => {

          const payload = store.getRootField("PostCreateMutation");

          if (!payload) {
            return;
          }

          const newEdge = payload.getLinkedRecord("postEdge");
          
          if (!newEdge) {
            return;
          }

          sharedUpdater(store, newEdge);
          }, 
 
          optimisticUpdater: (store) => {
            const id = "client:newEdge:" + tempID++;

            const node = store.create(input, "Post");

            node.setValue(id, "id"); 

            node.setValue(postCreateInput, "posts"); 

            const newPost = store.create(
              "client:newEdge:" + tempID++,
              "postEdge"
            );
            newPost.setLinkedRecord(node, "node");
            sharedUpdater(store, newPost); 
          }, 
        }) 
      },
      [commit]
      ),
  ]
}