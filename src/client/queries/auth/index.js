import gql from "graphql-tag";

module.exports = {
  fetchCurrentUser: gql`
    {
      currentUser {
        id
        initialized
        badge
      }
    }
  `
};
