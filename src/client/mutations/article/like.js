import gql from "graphql-tag";

module.exports = {
  likeArticle: gql`
    mutation like($input: likeArticleInputType) {
      likeArticle(input: $input) {
        id
        createdAt
      }
    }
  `
};
