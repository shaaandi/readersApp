import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { createComment } from "../../mutations/article/comment";
import { fetchComments } from "../../queries/articlePage/comments";

function closeForm(articleId, history) {
  // document.getElementById("addComment").style.width = "0";
  document.getElementById("addComment").style.transform = "translateX(-500px)";
  setTimeout(() => {
    history.go(-1);
  }, 500);
}

function AddComment({ match, history }) {
  let [mutateCreateComment, { data, loading, error }] = useMutation(
    createComment
  );

  let [comment, setComment] = useState("");
  let { articleId } = match.params;
  let [onlyOnce] = useState(0);

  useEffect(() => {
    let width = window.innerWidth - 520;
    // document.getElementById("addComment").style.width = `100%`;
    document.getElementById("addComment").style.transform = "translateX(0px)";
  }, [onlyOnce]);

  // if (data) {
  //   setComment("");
  //   closeForm(articleId, history);
  // }

  return (
    <div id="addComment">
      <div id="addCommentForm" class="row">
        <form
          onSubmit={e => {
            e.preventDefault();
            mutateCreateComment({
              variables: {
                input: { content: comment, articleId }
              },
              awaitRefetchQueries: true,
              refetchQueries: [
                {
                  query: fetchComments,
                  variables: {
                    id: articleId
                  }
                }
              ],
              update(cache, data) {
                closeForm(articleId, history);
              }
            });
          }}
          id="addCommentForm-form"
          class="col s12"
        >
          {loading ? (
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
          <div class="dialogbox">
            <div className="imgDiv">
              <img
                src="https://s3.amazonaws.com/uifaces/faces/twitter/jpenico/128.jpg"
                className="materialboxed"
                width={60}
              />
            </div>
            <div class="body">
              <span class="tip tip-left"></span>
              <div class="message">
                <textarea
                  onChange={e => setComment(e.target.value)}
                  className="commentFo"
                >
                  {comment}
                </textarea>
              </div>
              <div className="options">
                <button
                  onClick={e => {
                    e.preventDefault();
                    closeForm(articleId, history);
                  }}
                  className="waves-effect waves-light btn btn-small"
                >
                  Discard
                </button>

                <button
                  class="btn waves-effect waves-light btn-small"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(AddComment);
