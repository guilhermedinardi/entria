import graphql from 'babel-plugin-relay/macro';

export const PostDeleteMutation = graphql `
  mutation PostDeleteMutation($input: PostDeleteInput!){
    PostDeleteMutation(input: $input){  
      error
      success
      deleteId
    },
  }
`;
export const postDeleteOptimisticResponse = post => ({
  PostDeleteMutation: {
    success: '',
    error: null,
    post: {
      id: post.id,
    },
  },
});
