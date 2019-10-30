import gql from "graphql-tag";

module.exports = {
  setMainSection: gql`
    mutation setMainSection($input: setMainSectionInputType) {
      setMainSection(input: $input) {
        headline1 {
          id
          title
        }
        headline2 {
          id
          title
        }
        headline3 {
          id
          title
        }
        headline4 {
          id
          title
        }
        headline5 {
          id
          title
        }
        editorsPick {
          id
          title
        }
      }
    }
  `,
  setCategorySection: gql`
    mutation setCategorySection($input: setCategorySectionInputType) {
      setCategorySection(input: $input) {
        headline1 {
          title
        }
        headline2 {
          title
        }
        headline3 {
          title
        }
      }
    }
  `
};
