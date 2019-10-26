import gql from "graphql-tag";

module.exports = {
  fetchCategoryTemplete: gql`
    query FetchCategoryTemplete($input: fetchCategoryTempleteInputType!) {
      fetchCategoryTemplete(input: $input) {
        headline1 {
          title
          id
          content
          createdAt
        }
        headline2 {
          title
          id
          content
          createdAt
        }
        headline3 {
          title
          id
          content
          createdAt
        }
      }
    }
  `,
  fetchCategoryLatest: gql`
    query FetchCategoryLatest($input: fetchCategoryTempleteInputType) {
      fetchCategoryLatest(input: $input) {
        id
        title
        createdAt
        content
        authorId {
          username
        }
      }
    }
  `,
  fetchCategoryHot: gql`
    query FetchCategoryHot($input: fetchCategoryTempleteInputType) {
      fetchCategoryLatest(input: $input) {
        id
        title
        createdAt
        content
        likes {
          readerId {
            username
          }
        }
        authorId {
          username
        }
      }
    }
  `
};
