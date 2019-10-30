import React from "react";
import App from "./App";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleComments from "./components/articlePage/articleComments";
import AddComment from "./components/articlePage/articleAddComment";
import AuthorPage from "./pages/AuthorPage";
import AuthorAbout from "./components/authorPage/AuthorAbout";
import AuthorArticles from "./components/authorPage/AuthorArticles";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Logout from "./pages/auth/Logout";
import ReplaceArticle from "./pages/management/ReplaceArticle";
export default [
  {
    component: App,
    routes: [
      {
        component: ReplaceArticle,
        path: "/management/manage/templete/replace",
        exact: true
      },
      {
        component: Logout,
        path: "/logout",
        exact: true
      },
      {
        component: Login,
        path: "/auth/login",
        exact: true
      },
      {
        component: Signup,
        path: "/auth/signup",
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
      },
      {
        component: AuthorPage,
        path: "/author/:authorId",
        routes: [
          {
            component: AuthorAbout,
            path: "/author/:authorId",
            exact: true
          },
          {
            component: AuthorArticles,
            path: "/author/:authorId/articles",
            exact: true
          }
        ]
      }
    ]
  }
];
