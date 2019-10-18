import React from "react";
import App from "./App";
import MainPage from "./pages/MainPage";

const Login = () => {
  return (
    <div>
      <h3>Login Form</h3>
      <input type="text" placeholder="enter your username" />
      <button>Submit</button>
    </div>
  );
};

export default [
  {
    component: App,
    routes: [
      {
        component: Login,
        path: "/login"
      },
      {
        component: MainPage,
        path: "/",
        exact: true
      }
    ]
  }
];
