import React from "react";
import { Link, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import AuthorHeader from "../components/authorPage/AuthorHeader";

import { useQuery } from "@apollo/react-hooks";
import { fetchAuthor } from "../queries/authorPage/index";
// just to minimize the number of queries made, we are going to use apollo hook
// here and pass the minimal data to the basic route

function AuthorPage({
  route,
  match: {
    params: { authorId }
  }
}) {
  let { data, loading, error } = useQuery(fetchAuthor, {
    variables: {
      id: authorId
    }
  });

  if (loading) {
    return (
      <div id="custom-loader">
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AuthorHeader author={data.author} />
      {/* about and other components should return a div , with row class */}
      {renderRoutes(route.routes, { author: data.author })}
    </div>
  );
}

export default withRouter(AuthorPage);
