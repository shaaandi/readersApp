import gql from "graphql-tag";

module.exports = {
  fetchHeadlines: gql`
    {
      fetchMainTemplete {
        headline1 {
          title
          id
          authorId {
            username
            id
          }
          createdAt
          category
        }
        headline2 {
          title
          id
          authorId {
            username
            id
          }
          createdAt
          category
        }
        headline3 {
          title
          id
          authorId {
            username
            id
          }
          createdAt
          category
        }
        headline4 {
          title
          id
          authorId {
            username
            id
          }
          createdAt
          category
        }
        headline5 {
          title
          id
          authorId {
            username
            id
          }
          createdAt
          category
        }
      }
    }
  `,
  fetchEditorsPick: gql`
    {
      fetchMainTemplete {
        editorsPick {
          title
          id
        }
      }
    }
  `
};
