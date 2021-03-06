import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { withRouter, Link } from "react-router-dom";

function articleManageOptions({ pageT, section, indexInSection = null, user }) {
  // enum refetch Queries = fetchCategoryLatest fetchCategoryTemplete
  if (!user) return;
  if (user.badge !== "CONTENT_MANAGER") return;
  let editLink = `/management/manage/templete/replace?pageT=${pageT}&section=${section}`;
  if (indexInSection !== null) editLink += `&indexInSection=${indexInSection}`;
  editLink += `&refetchQueries=fetchCategoryTemplete`;
  return (
    <div className="col s12 m12 l12 right-align">
      {/* content manager buttons are shown here */}
      <Link to={editLink}>
        <i class="material-icons">create</i>
      </Link>
    </div>
  );
}

function renderLatest({ latest, history }) {
  return latest.map(article => (
    <div className="col s12 m12 l12 xl12 side-section-card">
      {/* <div className="row"> */}
      <div
        className="col s12 m6 l6 xl6 pointCursor"
        id="side-section-card-left"
        onClick={() => history.push(`/article/${article.id}`)}
      >
        <h6 className="bold gray zero-margin">@{article.authorId.username}</h6>
        <h6
          id="mobile-main-sec1-editorsPick-title"
          className="bold zero-margin"
        >
          {article.title.slice(0, 30)}
        </h6>
        <p id="mobile-main-sec1-editorsPick-p">
          {article.content[0].slice(0, 150)}
        </p>
        <Moment fromNow>{new Date(parseInt(article.createdAt))}</Moment>
      </div>
      <div className="col s12 m6 l6 xl6">
        <img
          id="mobile-main-sec1-editorsPick-img"
          className="materialboxed"
          width="200"
          height="200"
          src="https://cdn.pixabay.com/photo/2016/11/22/19/08/blur-1850082__340.jpg"
        />
      </div>
      {/* </div> */}
    </div>
  ));
}

function Section1({ headlines, latest, hotest, history, user, categoryName }) {
  let { headline1, headline2, headline3 } = headlines;
  return (
    <div className="section row col s12 m12 l12">
      <div className="row col s12 m8 l8">
        <div className="row pointCursor">
          {articleManageOptions({
            pageT: categoryName,
            section: "headline1",
            user
          })}
          <div
            onClick={() => history.push(`/article/${headline1.id}`)}
            className="col s12 m6 l6 xl6"
          >
            <h5 id="mobile-main-sec1-hd1-h">{headline1.title} </h5>
            <p id="mobile-main-sec1-hd1-p">
              {headline1.content[0].slice(0, 305)}
            </p>
            <Moment fromNow>{new Date(parseInt(headline1.createdAt))}</Moment>
          </div>
          <div className="col s12 m6 l6 xl6">
            <img
              id="mobile-main-sec1-hd1-img"
              className="materialboxed"
              width="400"
              src="https://cdn.pixabay.com/photo/2019/03/03/14/38/hacker-4031973_960_720.jpg"
            />
          </div>
        </div>
        <div className="col s12 m12 l12 border-seperator-horizontal"></div>
        <div
          id="mobile-main-sec1-hd3"
          className="col s12 m6 l6 right-border-seperator pointCursor"
        >
          {articleManageOptions({
            pageT: categoryName,
            section: "headline2",
            user
          })}
          <div
            onClick={() => history.push(`/article/${headline2.id}`)}
            className="row"
          >
            <h5 id="mobile-main-sec1-hd3-h">{headline2.title}</h5>
            <p id="mobile-main-sec1-hd3-p">
              {headline2.content[0].slice(0, 305)}
            </p>

            <p>
              <Moment fromNow>{new Date(parseInt(headline2.createdAt))}</Moment>
            </p>
          </div>
        </div>
        <div id="mobile-main-sec1-hd3" className="col s12 m6 l6 pointCursor">
          {articleManageOptions({
            pageT: categoryName,
            section: "headline3",
            user
          })}
          <div
            onClick={() => history.push(`/article/${headline3.id}`)}
            className="row"
          >
            <h5 id="mobile-main-sec1-hd3-h">
              {headline3.title.slice(0, 50)} ...
            </h5>
            <p id="mobile-main-sec1-hd3-p">
              {headline3.content[0].slice(0, 305)}
            </p>

            <p>
              <Moment fromNow>{new Date(parseInt(headline3.createdAt))}</Moment>
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m12 l4 xl4 ">
        <div className="left-border-seperator-main row">
          <div className="col s12 m12 l12 xl12">
            <div className="row">
              <h6
                id="mobile-main-sec1-editorsPick-heading"
                className="col s12 m12 l12 xl12 section-side-heading"
              >
                Latest
              </h6>
              {renderLatest({ latest, history })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Section1);
