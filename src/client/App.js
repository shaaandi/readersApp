import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App(props) {
  let [onMount] = useState(0);
  let { route, location } = props;
  useEffect(() => {
    // adding materialize image media listenier
  }, [onMount]);
  return (
    <div className="container-fluid">
      <Header currentUser={true} location={location} />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
