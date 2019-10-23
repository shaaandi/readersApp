import React from "react";
import { Link } from "react-router-dom";

function handleSideNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function renderUserOptions({ currentUser }) {
  if (currentUser) {
    return [
      <li>
        <Link to="/">Dashboard</Link>
      </li>,
      <li>
        <Link to="/">Subscribe</Link>
      </li>,
      <li>
        <Link to="/">Logout</Link>
      </li>
    ];
  } else {
    return [
      <li>
        <Link to="/">Login</Link>
      </li>,
      <li>
        <Link to="/">Signup</Link>
      </li>
    ];
  }
}

function renderCategoriesNav({ location }) {
  let current = location.pathname.slice(1);
  let categories = [
    "International",
    "US",
    "Politics",
    "Health",
    "Technology",
    "Sports",
    "Opinion"
  ];
  return categories.map(cat => {
    return (
      <Link to={`/${cat}`}>
        <li className="tab">
          {current == cat ? <a className="active">{cat}</a> : <a>{cat}</a>}
        </li>
      </Link>
    );
  });
}

function Header(props) {
  let { currentUser, location } = props;
  return [
    <nav id="nav-extended-custom" className="nav-extended">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" id="gothamTimesLogo">
          Inside Los Angeles
        </Link>
        <button id="sidenav-toggler" onClick={() => handleSideNav()}>
          <i className="material-icons">menu</i>
        </button>
        <ul className="right hide-on-med-and-down">
          {renderUserOptions({ currentUser })}
        </ul>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          {renderCategoriesNav({ location })}
        </ul>
      </div>
    </nav>,
    // <ul className="sidenav" id="mobile-demo">
    //   <li>
    //     <a href="sass.html">Sass</a>
    //   </li>
    //   <li>
    //     <a href="badges.html">Components</a>
    //   </li>
    //   <li>
    //     <a href="collapsible.html">JavaScript</a>
    //   </li>
    // </ul>
    <ul id="mySidenav" className="sidenav-w">
      <a href="#" className="closebtn" onClick={() => closeSideNav()}>
        &times;
      </a>
      {renderUserOptions({ currentUser })}
    </ul>
  ];
}

export default Header;
