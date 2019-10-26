import React from "react";
import { render } from "react-dom";

import { ApolloClient } from "apollo-boost";
// import {InMemoryCache} from 'apollo-cache-inmemory';
import { InMemoryCache, HttpLink } from "apollo-boost";
// import {HttpLink} from 'apollo-link-http';

import { ApolloProvider } from "@apollo/react-hooks";

import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const client = new ApolloClient({
  link,
  cache
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
