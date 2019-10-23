import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
// import { fetchComments } from "../../queries/articlePage/comments";
import { fetchComments } from "../../queries/articlePage/comments";
import { renderRoutes } from "react-router-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

function handleCloseComments(articleId, history) {
  document.getElementById("articleComments").style.width = "0";
  setTimeout(() => {
    history.push(`/article/${articleId}`);
  }, 500);
}

function renderComments({ comments }) {
  return comments.map(comment => {
    return (
      <div class="dialogbox">
        <div className="imgDiv">
          <img
            src={comment.readerId.profileImg}
            className="materialboxed"
            width={60}
          />
        </div>
        <div class="body">
          <span class="tip tip-left"></span>
          <div class="message">
            <span>{comment.content}</span>
            <Link to={`/reader/${comment.readerId.id}`}>
              {" "}
              @{comment.readerId.username}
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

function ArticleComments({ match, history, route, deviceWidth }) {
  // COMMENTS
  // The functionality about the upgrade of comments likes and repsonses and donw votes,
  // wll be added later, and then useLazyQuery will be used to handle those refreshes,
  // END COMMENTS

  let [comments, setStateComments] = useState([]);
  let { articleId } = match.params;
  let [onlyOnce] = useState(0);
  // only once when component is mounted ;

  let { data: useQData, loading: useQLoading, error: useQError } = useQuery(
    fetchComments,
    {
      variables: {
        id: articleId
      }
    }
  );
  useEffect(() => {
    if (deviceWidth > 1000) {
      document.getElementById("articleComments").style.width = "30%";
    } else if (deviceWidth > 600) {
      document.getElementById("articleComments").style.width = "50%";
    } else {
      document.getElementById("articleComments").style.width = "100%";
    }
  }, [onlyOnce, deviceWidth]);
  if (useQLoading) {
    return (
      <div
        id="articleComments"
        className="articleComments-sideNav center-align"
      >
        <div id="articleComments-loading">
          <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="articleComments" className="articleComments-sideNav">
      {/* <Link className="closebtn" to={`/article/${articleId}`}>
        X
      </Link> */}
      <div id="commentsTopButtons">
        <div className="commentsTopButton  commentsTopButtonHeader">
          {useQData.article.comments.length} Comments
        </div>
        <div className="commentsTopButton">
          <Link to={`/article/${articleId}/comments/addComment`}>
            <FontAwesomeIcon icon={faFeather} />
          </Link>
        </div>
        <div className="commentsTopButton">
          <button
            className="close-button"
            onClick={() => handleCloseComments(articleId, history)}
          >
            X
          </button>
        </div>
      </div>
      {renderRoutes(route.routes)}
      <div id="commentsDiv" className="container">
        {renderComments({ comments: useQData.article.comments })}
      </div>
    </div>
  );
}

export default withRouter(ArticleComments);
