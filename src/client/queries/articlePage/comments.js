import gql from "graphql-tag";

module.exports = {
  fetchComments: gql`
    query article($id: ID!) {
      article(id: $id) {
        article {
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
    }
  `
};
