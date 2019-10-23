import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

function ArticleHeader({ article, width }) {
  let {
    id: articleId,
    title,
    likes,
    comments,
    authorId: { username, profileImg },
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
            @{username}
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
          <span>{likes.length}</span>
        </div>
        <div className="article-header-likesAndComment">
          <i className="material-icons">thumb_up</i>
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

export default ArticleHeader;
