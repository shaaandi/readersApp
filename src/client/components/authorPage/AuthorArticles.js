import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

import { useQuery } from "@apollo/react-hooks";
import { fetchAuthorArticles } from "../../queries/authorPage/index";

function openArticle({ articleId, history }) {
  history.push(`/article/${articleId}`);
}

function renderArticles({ articles, history }) {
  return articles.map(article => {
    let { id: articleId, title, content, createdAt, category } = article;
    return (
      <div
        onClick={() => openArticle({ articleId, history })}
        className="col s12 m12 l12 xl12 authorArticleWrapper"
      >
        <div className="row authorArticle">
          <div className="col s6 m6 l6  authorArticle-timeStamp">
            <h6>
              <Moment fromNow>{new Date(parseInt(createdAt))}</Moment>
            </h6>
          </div>
          <div className="col s6 m6 l6 xl6 authorArticle-category">
            <h6 className="right-align">{category.toUpperCase()}</h6>
          </div>
          <div className="col s12 m12 l12 xl12 authorArticle-title">
            <h5>{title}</h5>
          </div>
          <div className="col s12 m12 l12 xl12 authorArticle-content">
            <p>{content[0].slice(0, 350)}</p>
          </div>
        </div>
      </div>
    );
  });
}

function AuthorArticles({
  match: {
    params: { authorId }
  },
  history
}) {
  let { data, loading, error } = useQuery(fetchAuthorArticles, {
    variables: {
      id: authorId
    }
  });

  let [onMount] = useState(0);

  // useEffect(() => {
  //   document.getElementById("authorArticlesRouteWrapper").style.width = "100%";
  // }, [onMount]);
  if (loading) {
    return (
      <div id="custom-loader">
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    );
  }

  let { articles } = data.author;
  return (
    <div id="authorArticlesRouteWrapper" className="container">
      <div className="row">{renderArticles({ articles, history })}</div>;
    </div>
  );
}

export default withRouter(AuthorArticles);
