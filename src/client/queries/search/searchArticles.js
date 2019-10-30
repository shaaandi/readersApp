import gql from "graphql-tag";

module.exports = {
  searchArticles: gql`
    query searchArticles($input: searchArticlesInputType) {
      searchArticles(input: $input) {
        id
        title
        authorId {
          id
          username
          profileImg
        }
        createdAt
        comments {
          id
        }
        likes {
          id
        }
        category
        content
      }
    }
  `
};
