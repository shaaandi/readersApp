import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import React from "react";

import routes from "../client/Routes";

const Layout = () => {
  return <div>{renderRoutes(routes)}</div>;
};

export default Layout;
