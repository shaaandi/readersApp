import gql from "graphql-tag";

module.exports = {
  article: gql`
    query article($id: ID!) {
      article(id: $id) {
        id
        title
        content
        createdAt
        authorId {
          id
          username
          profileImg
        }
        likes {
          id
        }
        comments {
          id
        }
      }
    }
  `
};
