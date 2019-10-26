import gql from "graphql-tag";

module.exports = {
  login: gql`
    mutation login($input: loginInputType) {
      login(input: $input) {
        id
        initialized
        badge
      }
    }
  `,
  signup: gql`
    mutation signup($input: signupInputType) {
      signup(input: $input) {
        id
        initialized
        badge
      }
    }
  `,
  logout: gql`
    mutation {
      logout {
        id
        initialized
        badge
      }
    }
  `
};
