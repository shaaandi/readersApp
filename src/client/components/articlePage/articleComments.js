import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
// import { fetchComments } from "../../queries/articlePage/comments";
import { fetchComments } from "../../queries/articlePage/comments";
import { deleteComment } from "../../mutations/article/comment";
import { renderRoutes } from "react-router-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

function handleCloseComments(articleId, history) {
  document.getElementById("articleComments").style.width = "0";
  setTimeout(() => {
    history.go(-1);
  }, 500);
}

function commentsAuthorizedButtons({
  comment,
  user,
  mutateDeleteComment,
  articleId
}) {
  if (!user) return;
  if (comment.readerId.id === user.id) {
    return (
      <div className="right-align">
        <i
          onClick={() => {
            mutateDeleteComment({
              variables: {
                input: { id: comment.id }
              },
              awaitRefetchQueries: true,
              refetchQueries: [
                {
                  query: fetchComments,
                  variables: {
                    id: articleId
                  }
                }
              ]
            });
          }}
          class="material-icons"
        >
          delete
        </i>
      </div>
    );
  }
}

function renderComments({ comments, user, mutateDeleteComment, articleId }) {
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
            {commentsAuthorizedButtons({
              comment,
              user,
              mutateDeleteComment,
              articleId
            })}
          </div>
        </div>
      </div>
    );
  });
}

function ArticleComments({ match, history, route, deviceWidth, user }) {
  // COMMENTS
  // The functionality about the upgrade of comments likes and, repsonses and donw votes,
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

  // defining deleteComment mutation and passind down to render comments
  // and then deleteComment function;
  let [
    mutateDeleteComment,
    {
      data: deleteCommentResponse,
      loading: deleteCommentLoading,
      error: deleteCommentError
    }
  ] = useMutation(deleteComment);

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
          {useQData.article.article.comments.length} Comments
        </div>
        <div
          className={!user ? "commentsTopButton popLogin" : "commentsTopButton"}
        >
          {user ? (
            <Link to={`/article/${articleId}/comments/addComment`}>
              <FontAwesomeIcon icon={faFeather} />
            </Link>
          ) : (
            <Link to={`/article/${articleId}/comments`} replace>
              <FontAwesomeIcon icon={faFeather} />
            </Link>
          )}
          <span
            id="popLoginText-left"
            className="addCommentpopLogin popLoginText"
          >
            <Link to="/auth/login">Login First</Link>
          </span>
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
        {deleteCommentLoading ? (
          <div id="custom-loader">
            <div style={{ flexBasis: "100%" }} class="progress">
              <div class="indeterminate"></div>
            </div>
          </div>
        ) : (
          <div style={{ background: "transparent" }} id="custom-loader">
            <div style={{ background: "transparent" }} class="progress">
              <div
                style={{ background: "transparent" }}
                class="indeterminate"
              ></div>
            </div>
          </div>
        )}
        {renderComments({
          comments: useQData.article.article.comments,
          user,
          mutateDeleteComment,
          articleId
        })}
      </div>
    </div>
  );
}

export default withRouter(ArticleComments);
