import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import {
  setMainSection,
  setCategorySection
} from "../../mutations/management/articleReplace";

import { fetchHeadlines, fetchEditorsPick } from "../../queries/mainPage";
import { fetchCategoryTemplete } from "../../queries/categoryPage";

import queryString from "query-string";

function handleFormSubmit({
  history,
  data: { articleId, section, indexInSection, pageT, refetchQueries },
  mutateSetMainSection,
  mutateSetCategorySection
}) {
  if (pageT === "main") {
    let refetchQuery;
    if (refetchQueries === "fetchHeadlines") refetchQuery = fetchHeadlines;
    else refetchQuery = fetchEditorsPick;
    mutateSetMainSection({
      variables: {
        input: {
          articleId,
          section,
          indexInSection: indexInSection ? parseInt(indexInSection) : 0
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: refetchQuery
        }
      ]
    });
  } else {
    // other validations will be done later; like article Category check type
    mutateSetCategorySection({
      variables: {
        input: {
          articleId,
          section,
          name: pageT
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: fetchCategoryTemplete,
          variables: {
            input: {
              name: pageT
            }
          }
        }
      ]
    });
  }
}

function Form({ history }) {
  let { pageT, section, indexInSection, refetchQueries } = queryString.parse(
    history.location.search
  );
  let [articleId, setArticleId] = useState("");
  let [mutateSetMainSection, { data, loading, error }] = useMutation(
    setMainSection
  );
  let [
    mutateSetCategorySection,
    { data: setCatData, loading: setCatLoading, error: setCatError }
  ] = useMutation(setCategorySection);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleFormSubmit({
          history,
          data: { articleId, section, pageT, indexInSection, refetchQueries },
          mutateSetMainSection,
          mutateSetCategorySection
        });
      }}
      style={{ padding: "10px" }}
      className="row col s12"
    >
      <div className="input-field col s12">
        <h5>Replace Article</h5>
      </div>
      <div class="input-field col s12">
        <input
          id="first_name"
          type="text"
          class="validate"
          value={articleId}
          onChange={e => setArticleId(e.target.value)}
        />
        <label for="first_name">Article Id</label>
      </div>
      <div class="input-field col s12 right-align">
        <button className="waves-effect waves-light btn">Submit</button>
      </div>
    </form>
  );
}

export default withRouter(Form);
