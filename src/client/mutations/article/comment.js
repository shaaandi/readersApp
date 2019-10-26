import gql from "graphql-tag";

module.exports = {
  createComment: gql`
    mutation createComment($input: createCommentInputType!) {
      createComment(input: $input) {
        content
        readerId {
          username
        }
        articleId {
          id
          title
        }
        createdAt
      }
    }
  `,
  deleteComment: gql`
    mutation deleteComment($input: deleteCommentInputType!) {
      deleteComment(input: $input) {
        id
        content
      }
    }
  `
};
