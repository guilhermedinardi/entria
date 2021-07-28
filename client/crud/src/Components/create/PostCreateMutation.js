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
  postCreate,
  newEdge
) {
  console.log(store, store.getRoot())
  const connection = ConnectionHandler.getConnection(
     store.getRoot(), 
    "PostHome_posts"
  );
  console.log({connection})
  if (!connection) {
    return;
  }
  ConnectionHandler.insertEdgeAfter(connection, newEdge);
}

let tempID = 0;

export default function usePostCreateMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (PostCreateInput) => {
        const input = {
          PostCreateInput
        };

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
            const id = "client:newTodo:" + tempID++;

            const node = store.create(id, "Post");

            node.setValue(id, "id");

            node.setValue(PostCreateInput, "posts");

            const newEdge = store.create(
              "client:newEdge:" + tempID++,
              "postEdge"
            );
            newEdge.setLinkedRecord(node, "node");
            sharedUpdater(store, newEdge);
          },
        })
      },
      [commit]
    ),
  ]
}