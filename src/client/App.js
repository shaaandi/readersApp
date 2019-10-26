import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import Header from "./components/Header";

import { fetchCurrentUser } from "./queries/auth";

function App(props) {
  let [onMount] = useState(0);
  let { route, location } = props;
  useEffect(() => {
    // adding materialize image media listenier
  }, [onMount]);

  let { data, loading, error } = useQuery(fetchCurrentUser);

  if (loading) {
    return (
      <div id="custom-loader">
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    );
  }

  console.log(data, "app console");
  let { currentUser: user } = data;
  return (
    <div className="container-fluid">
      <Header currentUser={data.currentUser} location={location} />
      {renderRoutes(route.routes, { user })}
    </div>
  );
}

export default App;
