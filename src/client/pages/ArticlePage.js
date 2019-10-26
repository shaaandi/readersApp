import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { article as articleQuery } from "../queries/articlePage";
import { renderRoutes } from "react-router-config";
import { useEffect, useState } from "react";

// importing components
import ArticleHeader from "../components/articlePage/articleHeader";
import ArticleContent from "../components/articlePage/articleContent";

function ArticlePage({ match, route, user }) {
  let [width, setWidth] = useState(0);
  let [justOnMount] = useState(0);
  let { articleId } = match.params;
  let { data, loading, error } = useQuery(articleQuery, {
    variables: {
      id: articleId
    }
  });

  // adding event Listenier only on intial render
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [justOnMount]);
  // removing the event listener on unmount of component
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  });

  console.log(data, loading, error);

  if (loading) {
    return (
      <div id="custom-loader">
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    );
  }

  let { article, isLiked } = data.article;
  return (
    <div className="row">
      <div className="col s12 m10 l8 xl8">
        <ArticleHeader
          article={article}
          width={width}
          isLiked={isLiked}
          user={user}
        />
        <ArticleContent article={article} />
        {renderRoutes(route.routes, { deviceWidth: width, user })}
      </div>
    </div>
  );
}

export default withRouter(ArticlePage);
