import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      <Link to="/login">Login</Link>
    </div>
  );
};

let query = gql`
  {
    article(id: "5da1df05f5e2f30b4c529e75") {
      title
      content
      authorId {
        username
      }
    }
  }
`;

let CURRENT_USER = gql`
  {
    currentUser {
      id
      badge
    }
  }
`;

function App({ route }) {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
