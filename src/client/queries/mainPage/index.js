import gql from "graphql-tag";

module.exports = {
  fetchHeadlines: gql`
    {
      fetchMainTemplete {
        headline1 {
          title
          content
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
          content
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
          content
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
          content
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
          content
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
          content
          createdAt
          authorId {
            username
            id
          }
        }
      }
    }
  `
};
