import React, { useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { withRouter } from "react-router-dom";

function renderEditorsPick({ editorsPick }) {
  return editorsPick.map(article => (
    <div className="col s12 m12 l12 xl12 side-section-card">
      {/* <div className="row"> */}
      <div className="col s12 m6 l6 xl6" id="side-section-card-left">
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

function Section1({ headlines, editorsPick, history }) {
  let { headline1, headline2, headline3, headline4, headline5 } = headlines;
  return (
    <div className="section row">
      <div className="col s12 m12 l8 xl8">
        {/* aticles goes here */}
        <div className="row">
          <div className="col s12 m12 l12">
            <div
              className="row"
              id="mobile-main-sec1-hd1"
              onClick={() => history.push(`/article/${headline1.id}`)}
            >
              <div className="col s12 m6 l6 xl6">
                <h5 id="mobile-main-sec1-hd1-h">
                  {headline1.title.slice(0, 50)} ...
                </h5>
                <p id="mobile-main-sec1-hd1-p">
                  {headline1.content[0].slice(0, 305)}
                </p>
                <Moment fromNow>
                  {new Date(parseInt(headline1.createdAt))}
                </Moment>
              </div>
              <div className="col s12 m6 l6 xl6">
                <img
                  id="mobile-main-sec1-hd1-img"
                  className="materialboxed"
                  width="400"
                  src="https://pmcvariety.files.wordpress.com/2019/03/trump-1.jpg?w=1000"
                />
              </div>
            </div>
          </div>
          <div className="col s12 m12 l12 border-seperator-horizontal"></div>
          <div
            id="mobile-main-sec1-hd3"
            className="col s12 m6 l6 right-border-seperator"
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
          <div className="col s12 m6 l6">
            <div className="row">
              <div id="mobile-main-sec1-hd4" className="col s12 m12 l12">
                <h5 id="mobile-main-sec1-hd4-h">
                  {headline4.title.slice(0, 50)} ...
                </h5>
                <Moment fromNow>
                  {new Date(parseInt(headline4.createdAt))}
                </Moment>
              </div>
              <div id="mobile-main-sec1-hd5" className="col s12 m12 l12">
                <h5 id="mobile-main-sec1-hd5-h">
                  {headline5.title.slice(0, 50)} ...
                </h5>
                <Moment fromNow>
                  {new Date(parseInt(headline5.createdAt))}
                </Moment>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l12 border-seperator-horizontal"></div>
          <div className="col s12 m12 l12">
            <div className="row">
              <div id="mobile-main-sec1-hd2" className="col s12 m6 l6 xl6">
                <h5 id="mobile-main-sec1-hd2-h">
                  {headline2.title.slice(0, 50)} ...
                </h5>
                <p id="mobile-main-sec1-hd2-p">
                  {headline2.content[0].slice(0, 305)}
                </p>
                <Moment fromNow>
                  {new Date(parseInt(headline2.createdAt))}
                </Moment>
              </div>
              <div className="col s12 m6 l6 xl6">
                <img
                  id="mobile-main-sec1-hd2-img"
                  className="materialboxed"
                  width="400"
                  src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg"
                />
              </div>
            </div>
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
                Editors' Pick
              </h6>
              {renderEditorsPick({ editorsPick })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Section1);
