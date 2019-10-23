import React from "react";
import App from "./App";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleComments from "./components/articlePage/articleComments";
import AddComment from "./components/articlePage/articleAddComment";

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
        path: "/login",
        exact: true
      },
      {
        component: MainPage,
        path: "/",
        exact: true
      },
      {
        component: CategoryPage,
        path: "/:category",
        exact: true
      },
      {
        component: ArticlePage,
        path: "/article/:articleId",
        routes: [
          {
            component: ArticleComments,
            path: "/article/:articleId/comments",
            routes: [
              {
                component: AddComment,
                path: "/article/:articleId/comments/addComment"
              }
            ]
          }
        ]
      }
    ]
  }
];
