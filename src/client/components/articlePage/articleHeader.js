import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { likeArticle } from "./../../mutations/article/like";
import { article as articleQuery } from "../../queries/articlePage";

function ArticleHeader({ article, isLiked, user }) {
  console.log(user, "article-header");
  let [
    mutateLikeArticle,
    {
      data: likeArticleResponse,
      loading: likeArticleLoading,
      error: likeArticleError
    }
  ] = useMutation(likeArticle);

  let {
    id: articleId,
    title,
    likes,
    comments,
    authorId: { username, profileImg, id: authorId },
    createdAt
  } = article;
  let profileImgStyle = {
    borderRadius: "50%"
  };
  let usernameStyle = {
    fontSize: "medium",
    fontWeight: "bold",
    color: "#ada2a2"
  };
  let numberOfLikes = likes.length;
  let iconStyle = {
    color: "black"
  };
  if (likeArticleLoading) {
    if (isLiked) {
      numberOfLikes--;
      iconStyle = {
        color: "black",
        cursor: "default"
      };
    } else {
      numberOfLikes++;
      iconStyle = {
        color: "#039be5",
        cursor: "default"
      };
    }
  } else {
    if (isLiked) {
      numberOfLikes = likes.length;
      iconStyle = {
        color: "#039be5"
      };
    } else {
      numberOfLikes = likes.length;
      iconStyle = {
        color: "black"
      };
    }
  }

  return (
    <div className="col s12 m12 l12 xl12">
      <div className="col s12 m12 l12">
        <h5 className="left-align">{title}</h5>
      </div>
      <div className="col s12 m12 l12 left-align">
        <div className="row valign-wrapper left-align">
          <div className="col s3 m3 l1">
            <img
              style={profileImgStyle}
              src={profileImg}
              className="materialboxed"
              width={60}
            />
          </div>
          <div className="col s8 m8 l11" style={usernameStyle}>
            <Link to={`/author/${authorId}`}>@{username}</Link>
          </div>
        </div>
      </div>
      <div className="col l7 m6 s6 left-align">
        <Moment className="article-header-likesAndComment">
          {new Date(parseInt(article.createdAt))}
        </Moment>
      </div>

      <div className="col s6 m6 l5 " id="article-header-topCount">
        <div className="article-header-likesAndComment">
          <span>{numberOfLikes}</span>
        </div>
        <div
          className={
            !user
              ? "article-header-likesAndComment popLogin"
              : "article-header-likesAndComment"
          }
        >
          <i
            id="likeIcon"
            style={iconStyle}
            onClick={() => {
              if (!user) return false;
              mutateLikeArticle({
                variables: {
                  input: { articleId }
                },
                awaitRefetchQueries: true,
                refetchQueries: [
                  {
                    query: articleQuery,
                    variables: {
                      id: articleId
                    }
                  }
                ]
              });
            }}
            className="material-icons"
          >
            thumb_up
          </i>
          <span id="popLoginText-top" className="popLoginText">
            <Link to="/auth/login">Login First</Link>
          </span>
        </div>

        <div className="article-header-likesAndComment">
          <span>{comments.length}</span>
        </div>
        <Link
          to={`/article/${articleId}/comments`}
          className="article-header-likesAndComment"
        >
          <i className="material-icons">chat</i>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(ArticleHeader);
