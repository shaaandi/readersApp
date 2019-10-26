import gql from "graphql-tag";

module.exports = {
  fetchAuthor: gql`
    query($id: ID!) {
      author(id: $id) {
        id
        username
        fName
        lName
        profileImg
        phoneNumber
        email
        address {
          city
          street
          country
        }
      }
    }
  `,
  fetchAuthorArticles: gql`
    query($id: ID!) {
      author(id: $id) {
        id
        username
        articles {
          id
          title
          content
          createdAt
          category
        }
      }
    }
  `
};
