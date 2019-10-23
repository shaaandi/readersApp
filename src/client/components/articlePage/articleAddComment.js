import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function closeForm(articleId, history) {
  // document.getElementById("addComment").style.width = "0";
  document.getElementById("addComment").style.transform = "translateX(-500px)";
  setTimeout(() => {
    history.push(`/article/${articleId}/comments`);
  }, 500);
}

function AddComment({ match, history }) {
  let [comment, setComment] = useState("");
  let { articleId } = match.params;
  let [onlyOnce] = useState(0);

  useEffect(() => {
    let width = window.innerWidth - 520;
    // document.getElementById("addComment").style.width = `100%`;
    document.getElementById("addComment").style.transform = "translateX(0px)";
  }, [onlyOnce]);
  return (
    <div id="addComment">
      <div id="addCommentForm" class="row">
        <form id="addCommentForm-form" class="col s12">
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
                <textarea className="commentFo"></textarea>
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
