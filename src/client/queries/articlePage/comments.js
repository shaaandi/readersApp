import gql from "graphql-tag";

module.exports = {
  fetchComments: gql`
    query article($id: ID!) {
      article(id: $id) {
        id
        comments {
          id
          content
          readerId {
            id
            username
            profileImg
          }
        }
      }
    }
  `
};
