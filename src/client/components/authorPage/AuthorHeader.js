import React from "react";
import { withRouter, Link } from "react-router-dom";

function AuthorHeader({
  author: { id: authorId, username, profileImg },
  location: { pathname }
}) {
  let profileImgStyle = {
    borderRadius: "50%"
  };
  let usernameStyle = {
    fontSize: "medium",
    fontWeight: "bold",
    color: "#ada2a2"
  };

  // <div className="row valign-wrapper left-align">
  //   <div className="col s3 m3 l1">
  //     <img
  //       style={profileImgStyle}
  //       src={profileImg}
  //       className="materialboxed"
  //       width={60}
  //     />
  //   </div>
  //   <div className="col s8 m8 l11" style={usernameStyle}>
  //     <Link to={`/author/${authorId}`}>@{username}</Link>
  //   </div>
  // </div>;
  return (
    <nav class="nav-extended">
      <div id="authorHeader" class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab disabled">
            <Link to={`/author/${authorId}`}>@{username}</Link>
          </li>
          {pathname === `/author/${authorId}` ? (
            <li class="tab active">
              <Link to={`/author/${authorId}`}>About</Link>
            </li>
          ) : (
            <li class="tab">
              <Link to={`/author/${authorId}`}>About</Link>
            </li>
          )}
          {pathname === `/author/${authorId}/articles` ? (
            <li class="tab active">
              <Link to={`/author/${authorId}/articles`}>Articles</Link>
            </li>
          ) : (
            <li class="tab">
              <Link to={`/author/${authorId}/articles`}>Articles</Link>
            </li>
          )}
          {/* <li class="tab">
            <a href="#test4">Test 4</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );

  // return (
  //   <nav>
  //     <div class="nav-wrapper">
  //       <Link to="/" class="brand-logo">
  //         <img
  //           style={profileImgStyle}
  //           src={profileImg}
  //           className="materialboxed"
  //           width={60}
  //         />
  //       </Link>
  //       <ul id="nav-mobile" class="right hide-on-med-and-down">
  //         <li>
  //           <Link to={`/author/${authorId}`}>@{username}</Link>
  //         </li>
  //         <li>
  //           <Link href={`/author/${authorId}/articles`}>Articles</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}

export default withRouter(AuthorHeader);
