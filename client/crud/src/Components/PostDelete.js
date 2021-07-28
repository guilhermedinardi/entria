import { useCallback } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { ConnectionHandler } from 'relay-runtime';
import { useMutation } from "react-relay";


export const PostDeleteMutation = graphql `
  mutation PostDeleteMutation($input: PostDeleteInput!){
    PostDeleteMutation(input: $input){  
      error
      success
      deleteId
    },
  }
`;
function sharedUpdater(
  store,
  deleteId
) {
  const connection = ConnectionHandler.getConnection(
     store.getRoot(), 
    "PostHome_posts"
  );

  if (!connection) {
    return;
  }
  ConnectionHandler.deleteNode(connection, deleteId);
}

export default function useRemovePostMutation() {
  const [commit] = useMutation(PostDeleteMutation);
  return [
    useCallback(
      (postId) => {
        const input = {
          postId
        };

        return commit({
          variables: {
            input
          },
          updater: (store) => {

            const payload = store.getRootField("PostDeleteMutation");

            if (!payload) {
              return;
            }

            const deletedTodoId = payload.getValue("deleteId");
            

            if (typeof deletedTodoId !== "string") {
              throw new Error(
                `Expected removeTodo.deletedTodoId to be string, but got: ${typeof deletedTodoId}`
              );
            }

            sharedUpdater(store, postId );
          },

          optimisticUpdater: (store) => {
            sharedUpdater(store, postId);
          }

        });
      },
      [commit]
    )
  ]; 
}
