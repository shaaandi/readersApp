import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  fetchCategoryTemplete,
  fetchCategoryLatest,
  fetchCategoryHot
} from "../queries/categoryPage";

import Section1 from "../components/categoryPage/section1";

function CategoryPage({ location }) {
  let categoryName = location.pathname.slice(1);
  let {
    data: headlines,
    loading: headlinesLoading,
    error: headlinesError
  } = useQuery(fetchCategoryTemplete, {
    variables: {
      input: {
        name: categoryName
      }
    }
  });
  let { data: latest, loading: latestLoading, error: latestError } = useQuery(
    fetchCategoryLatest,
    {
      variables: {
        input: {
          name: categoryName
        }
      }
    }
  );
  let { data: hotest, loading: hotestLoading, error: hotestError } = useQuery(
    fetchCategoryHot,
    {
      variables: {
        input: {
          name: categoryName
        }
      }
    }
  );
  if (headlinesLoading || latestLoading || hotestLoading)
    return (
      <div id="custom-loader">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    );
  return (
    <div className="section row">
      <div className="col s12 m12 l12">
        <h3>{categoryName}</h3>
      </div>
      <Section1
        headlines={headlines.fetchCategoryTemplete}
        latest={latest.fetchCategoryLatest}
        hotest={hotest.fetchCategoryHot}
      />
    </div>
  );
}

export default withRouter(CategoryPage);
