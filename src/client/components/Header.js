import React from "react";
import { Link } from "react-router-dom";

function handleSideNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// later we will check wheather the user is oauth or local, and then
// [present the appropirate logout button.]

function renderUserOptions({ currentUser }) {
  if (!currentUser) {
    return [
      <li>
        <Link onClick={() => closeSideNav()} to="/auth/login">
          Login
        </Link>
      </li>,
      <li>
        <Link onClick={() => closeSideNav()} to="/auth/signup">
          Signup
        </Link>
      </li>
    ];
  }

  if (currentUser.id) {
    return [
      <li key={0}>
        <Link
          onClick={() => closeSideNav()}
          to="/management/search"
          // to="/management/search?searchType=byTitle&query=SSL&pageNum=1&sortField=createdAt&sortOrder=Asc"
        >
          Dashboard
        </Link>
      </li>,
      <li key={1}>
        <Link onClick={() => closeSideNav()} to="/">
          Subscribe
        </Link>
      </li>,
      <li key={2}>
        <Link onClick={() => closeSideNav()} to="/logout" replace>
          Logout
        </Link>
      </li>
    ];
  } else {
    return [
      <li key={0}>
        <Link onClick={() => closeSideNav()} to="/auth/login">
          Login
        </Link>
      </li>,
      <li key={1}>
        <Link onClick={() => closeSideNav()} to="/auth/signup">
          Signup
        </Link>
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
      <Link key={cat} to={`/${cat}`}>
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
    <nav key={0} id="nav-extended-custom" className="nav-extended">
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
    <ul key={1} id="mySidenav" className="sidenav-w">
      <button
        id="header-mobile-sidenav-closebtn"
        className="closebtn"
        onClick={() => closeSideNav()}
      >
        &times;
      </button>
      {renderUserOptions({ currentUser })}
    </ul>
  ];
}

export default Header;
