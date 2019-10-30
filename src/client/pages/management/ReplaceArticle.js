import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Search from "../../components/replaceArticle/Search";
import Form from "../../components/replaceArticle/form";

function closeTab({ history }) {
  history.go(-1);
}

function ReplaceArticle({ history }) {
  let [onMount] = useState(0);
  useEffect(() => {
    document.querySelector("#manageTempleteWrapper").style.transform =
      " translateX(0)";
  }, [onMount]);

  return (
    <div id="manageTempleteWrapper" className="row">
      {/* <div id="topPanel" className="col s12 m12 l12">
        <button className="ReplaceArticle">X</button>
      </div> */}
      <div className="row">
        {/* article input form */}
        <div
          id="replaceArtile-TopButtons"
          className="col s12 m12 l12 right-align"
        >
          <button onClick={() => closeTab({ history })}>X</button>
        </div>
        <div className="col s12 m12 l9">
          <Search />
        </div>
        <div className="col s12 m12 l3">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ReplaceArticle);
