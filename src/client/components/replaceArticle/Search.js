import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import { searchArticles } from "../../queries/search/searchArticles";

import Moment from "react-moment";
import "moment-timezone";

function openArticle({ articleId, history }) {
  // history.push(`/article/${articleId}`);
  window.open(this.makeHref(`localhost:3100/article/${articleId}`));
}

function handleSearch(
  e,
  querySearchArticles,
  { query, searchType, pageNum, sortOpts }
) {
  e.preventDefault();
  querySearchArticles({
    variables: {
      input: {
        query,
        searchType,
        pageNum,
        sortOpts
      }
    }
  });
}

function renderArticles({ articles, history }) {
  return articles.map(article => {
    let { id: articleId, title, content, createdAt, category } = article;
    return (
      <div
        style={{ cursor: "default" }}
        className="col s12 m12 l12 xl12 authorArticleWrapper"
      >
        <div className="row authorArticle">
          <div className="col s12 m12 l12">
            <div className="row ">
              <div className="col s4 left-align" style={{ padding: "4px" }}>
                <input
                  id={`${articleId}`}
                  type="text"
                  value={articleId}
                ></input>
              </div>
              <div className="col s2 left-align" style={{ padding: "4px" }}>
                <i
                  onClick={e => {
                    var copyText = document.getElementById(`${articleId}`);
                    /* Select the text field */
                    copyText.select();
                    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                    /* Copy the text inside the text field */
                    document.execCommand("copy");
                  }}
                  class="material-icons"
                >
                  content_copy
                </i>
              </div>
              <div className="col s6 right-align" style={{ padding: "4px" }}>
                <Link to={`/article/${articleId}`} target="_blank">
                  <i class="material-icons">open_in_new</i>
                </Link>
              </div>
            </div>
          </div>
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

function Search({ history }) {
  let [onMount] = useState(0);
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, [onMount]);

  let [querySearchArticles, { data, loading, error }] = useLazyQuery(
    searchArticles
  );
  let [query, setQuery] = useState("");
  let [searchType, setSearchType] = useState("byTitle");
  let [pageNum, setPageNum] = useState(1);
  let [sortField, setSortField] = useState("createdAt");
  let [sortOrder, setSortOrder] = useState("Desc");
  let [inCategories, setInCategories] = useState([]);

  let articles = [];

  if (data) {
    console.log(data, "lazyData");
    articles = data.searchArticles;
  }

  return (
    <div className="row col s12">
      <div className="col s12">
        <h5>Search Articles</h5>
        <nav>
          <div class="nav-wrapper">
            <form
              className=""
              onSubmit={e => {
                handleSearch(e, querySearchArticles, {
                  query,
                  searchType,
                  pageNum,
                  sortOpts: {
                    sortField,
                    sortOrder
                  },
                  inCategories
                });
              }}
            >
              <div class="input-field">
                <input
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  id="search"
                  type="search"
                  required
                />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <div className="row">
          <div className="col s4">
            <div class="input-field col s12">
              <select
                onChange={e => {
                  setSearchType(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Search By
                </option>
                <option value="byTitle">By Title</option>
                <option value="byAuthor">By Author</option>
              </select>
              <label>Search By</label>
            </div>
          </div>
          <div className="col s4">
            <div class="input-field col s12">
              <select
                onChange={e => {
                  var instance = M.FormSelect.getInstance(e.target);
                  setInCategories(instance.getSelectedValues());
                }}
                multiple
              >
                <option value="" disabled selected>
                  Select Categories
                </option>
                <option value="International">International</option>
                <option value="US">US</option>
                <option value="Politics">Politics</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option value="Opinion">Opinion</option>
              </select>
              <label>Search in Categories</label>
            </div>
          </div>
          <div className="col s2">
            <div class="input-field col s12">
              <select
                onChange={e => {
                  setSortField(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Sort Field
                </option>
                <option value="createdAt">Created At</option>
                <option value="likes">Likes</option>
              </select>
              <label>Sort Field</label>
            </div>
          </div>
          <div className="col s2">
            <div class="input-field col s12">
              <select
                onChange={e => {
                  setSortOrder(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select Order
                </option>
                <option value="Desc">Desc</option>
                <option value="Asc">Asc</option>
              </select>
              <label>Sort Order</label>
            </div>
          </div>
        </div>
        {loading ? (
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
        ) : (
          <div className="row">{renderArticles({ articles, history })}</div>
        )}
      </div>
    </div>
  );
}

export default withRouter(Search);
