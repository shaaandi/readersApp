/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    {\n      currentUser {\n        id\n        initialized\n        badge\n      }\n    }\n  "], ["\n    {\n      currentUser {\n        id\n        initialized\n        badge\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  fetchCurrentUser: (0, _graphqlTag2.default)(_templateObject)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    mutation login($input: loginInputType) {\n      login(input: $input) {\n        id\n        initialized\n        badge\n      }\n    }\n  "], ["\n    mutation login($input: loginInputType) {\n      login(input: $input) {\n        id\n        initialized\n        badge\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    mutation signup($input: signupInputType) {\n      signup(input: $input) {\n        id\n        initialized\n        badge\n      }\n    }\n  "], ["\n    mutation signup($input: signupInputType) {\n      signup(input: $input) {\n        id\n        initialized\n        badge\n      }\n    }\n  "]),
    _templateObject3 = _taggedTemplateLiteral(["\n    mutation {\n      logout {\n        id\n        initialized\n        badge\n      }\n    }\n  "], ["\n    mutation {\n      logout {\n        id\n        initialized\n        badge\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  login: (0, _graphqlTag2.default)(_templateObject),
  signup: (0, _graphqlTag2.default)(_templateObject2),
  logout: (0, _graphqlTag2.default)(_templateObject3)
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    {\n      fetchMainTemplete {\n        headline1 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline2 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline3 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline4 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline5 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n      }\n    }\n  "], ["\n    {\n      fetchMainTemplete {\n        headline1 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline2 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline3 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline4 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n        headline5 {\n          title\n          content\n          id\n          authorId {\n            username\n            id\n          }\n          createdAt\n          category\n        }\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    {\n      fetchMainTemplete {\n        editorsPick {\n          title\n          id\n          content\n          createdAt\n          authorId {\n            username\n            id\n          }\n        }\n      }\n    }\n  "], ["\n    {\n      fetchMainTemplete {\n        editorsPick {\n          title\n          id\n          content\n          createdAt\n          authorId {\n            username\n            id\n          }\n        }\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  fetchHeadlines: (0, _graphqlTag2.default)(_templateObject),
  fetchEditorsPick: (0, _graphqlTag2.default)(_templateObject2)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    query FetchCategoryTemplete($input: fetchCategoryTempleteInputType!) {\n      fetchCategoryTemplete(input: $input) {\n        headline1 {\n          title\n          id\n          content\n          createdAt\n        }\n        headline2 {\n          title\n          id\n          content\n          createdAt\n        }\n        headline3 {\n          title\n          id\n          content\n          createdAt\n        }\n      }\n    }\n  "], ["\n    query FetchCategoryTemplete($input: fetchCategoryTempleteInputType!) {\n      fetchCategoryTemplete(input: $input) {\n        headline1 {\n          title\n          id\n          content\n          createdAt\n        }\n        headline2 {\n          title\n          id\n          content\n          createdAt\n        }\n        headline3 {\n          title\n          id\n          content\n          createdAt\n        }\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    query FetchCategoryLatest($input: fetchCategoryTempleteInputType) {\n      fetchCategoryLatest(input: $input) {\n        id\n        title\n        createdAt\n        content\n        authorId {\n          username\n        }\n      }\n    }\n  "], ["\n    query FetchCategoryLatest($input: fetchCategoryTempleteInputType) {\n      fetchCategoryLatest(input: $input) {\n        id\n        title\n        createdAt\n        content\n        authorId {\n          username\n        }\n      }\n    }\n  "]),
    _templateObject3 = _taggedTemplateLiteral(["\n    query FetchCategoryHot($input: fetchCategoryTempleteInputType) {\n      fetchCategoryLatest(input: $input) {\n        id\n        title\n        createdAt\n        content\n        likes {\n          readerId {\n            username\n          }\n        }\n        authorId {\n          username\n        }\n      }\n    }\n  "], ["\n    query FetchCategoryHot($input: fetchCategoryTempleteInputType) {\n      fetchCategoryLatest(input: $input) {\n        id\n        title\n        createdAt\n        content\n        likes {\n          readerId {\n            username\n          }\n        }\n        authorId {\n          username\n        }\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  fetchCategoryTemplete: (0, _graphqlTag2.default)(_templateObject),
  fetchCategoryLatest: (0, _graphqlTag2.default)(_templateObject2),
  fetchCategoryHot: (0, _graphqlTag2.default)(_templateObject3)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    query article($id: ID!) {\n      article(id: $id) {\n        article {\n          id\n          title\n          content\n          createdAt\n          authorId {\n            id\n            username\n            profileImg\n          }\n          likes {\n            id\n          }\n          comments {\n            id\n          }\n        }\n        isLiked\n      }\n    }\n  "], ["\n    query article($id: ID!) {\n      article(id: $id) {\n        article {\n          id\n          title\n          content\n          createdAt\n          authorId {\n            id\n            username\n            profileImg\n          }\n          likes {\n            id\n          }\n          comments {\n            id\n          }\n        }\n        isLiked\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  article: (0, _graphqlTag2.default)(_templateObject)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    query article($id: ID!) {\n      article(id: $id) {\n        article {\n          id\n          comments {\n            id\n            content\n            readerId {\n              id\n              username\n              profileImg\n            }\n          }\n        }\n      }\n    }\n  "], ["\n    query article($id: ID!) {\n      article(id: $id) {\n        article {\n          id\n          comments {\n            id\n            content\n            readerId {\n              id\n              username\n              profileImg\n            }\n          }\n        }\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  fetchComments: (0, _graphqlTag2.default)(_templateObject)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    mutation createComment($input: createCommentInputType!) {\n      createComment(input: $input) {\n        content\n        readerId {\n          username\n        }\n        articleId {\n          id\n          title\n        }\n        createdAt\n      }\n    }\n  "], ["\n    mutation createComment($input: createCommentInputType!) {\n      createComment(input: $input) {\n        content\n        readerId {\n          username\n        }\n        articleId {\n          id\n          title\n        }\n        createdAt\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    mutation deleteComment($input: deleteCommentInputType!) {\n      deleteComment(input: $input) {\n        id\n        content\n      }\n    }\n  "], ["\n    mutation deleteComment($input: deleteCommentInputType!) {\n      deleteComment(input: $input) {\n        id\n        content\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  createComment: (0, _graphqlTag2.default)(_templateObject),
  deleteComment: (0, _graphqlTag2.default)(_templateObject2)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    query($id: ID!) {\n      author(id: $id) {\n        id\n        username\n        fName\n        lName\n        profileImg\n        phoneNumber\n        email\n        address {\n          city\n          street\n          country\n        }\n      }\n    }\n  "], ["\n    query($id: ID!) {\n      author(id: $id) {\n        id\n        username\n        fName\n        lName\n        profileImg\n        phoneNumber\n        email\n        address {\n          city\n          street\n          country\n        }\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    query($id: ID!) {\n      author(id: $id) {\n        id\n        username\n        articles {\n          id\n          title\n          content\n          createdAt\n          category\n        }\n      }\n    }\n  "], ["\n    query($id: ID!) {\n      author(id: $id) {\n        id\n        username\n        articles {\n          id\n          title\n          content\n          createdAt\n          category\n        }\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  fetchAuthor: (0, _graphqlTag2.default)(_templateObject),
  fetchAuthorArticles: (0, _graphqlTag2.default)(_templateObject2)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = __webpack_require__(18);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _reactCommon = __webpack_require__(20);

var _apolloClient = __webpack_require__(21);

var _apolloLinkHttp = __webpack_require__(22);

var _reactRouter = __webpack_require__(9);

var _apolloCacheInmemory = __webpack_require__(23);

var _Layout = __webpack_require__(24);

var _Layout2 = _interopRequireDefault(_Layout);

var _reactSsr = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// end apollo imports
function Html(_ref) {
  var content = _ref.content,
      state = _ref.state,
      DOMAIN = _ref.DOMAIN;

  return _react2.default.createElement(
    "html",
    null,
    _react2.default.createElement(
      "head",
      null,
      _react2.default.createElement(
        "title",
        null,
        "Inside L.A"
      ),
      _react2.default.createElement("base", { href: DOMAIN }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      _react2.default.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }),
      _react2.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Cinzel+Decorative|Jomolhari&display=swap",
        rel: "stylesheet"
      }),
      _react2.default.createElement("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "css/materialize.min.css",
        media: "screen,projection"
      }),
      _react2.default.createElement("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "css/custom.css",
        media: "screen,projection"
      }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })
    ),
    _react2.default.createElement(
      "body",
      null,
      _react2.default.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "window.__APOLLO_STATE__=" + JSON.stringify(state).replace(/</g, "\\u003c") + ";"
        }
      }),
      _react2.default.createElement("script", { type: "text/javascript", src: "js/materialize.min.js" }),
      _react2.default.createElement("script", { src: "main.bundle.js" }),
      _react2.default.createElement("script", { type: "text/javascript", src: "materializeCustom.js" })
    )
  );
}

// import proxy from 'express-http-proxy';

// apollo SSR imports
var app = (0, _express2.default)();

// app.use('/graphql',
//     proxy('http://localhost:4000/graphql')
// )

app.use(_express2.default.static("public"));

// setting enviroment variables ;
var PORT = process.env.PORT || 3100;
var DOMAIN = process.env.DOMAIN || "http://localhost:" + PORT + "/";

app.use(function (req, res) {
  // ssr
  var client = new _apolloClient.ApolloClient({
    ssrMode: true,
    link: (0, _apolloLinkHttp.createHttpLink)({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie: req.header("Cookie")
      },
      fetch: _nodeFetch2.default
    }),
    cache: new _apolloCacheInmemory.InMemoryCache()
  });

  var context = {};

  var App = _react2.default.createElement(
    _reactCommon.ApolloProvider,
    { client: client },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_Layout2.default, null)
    )
  );

  // rendering code
  (0, _reactSsr.getDataFromTree)(App).then(function () {
    // We are ready to render for real
    var content = (0, _server.renderToString)(App);
    var initialState = client.extract();

    var html = _react2.default.createElement(Html, { content: content, state: initialState, DOMAIN: DOMAIN });

    res.status(200);
    res.send("<!doctype html>\n" + (0, _server.renderToStaticMarkup)(html));
    res.end();
  });

  // res.send(
  //   `
  //       <!DOCTYPE html>
  //       <html>
  //       <head>
  //           <title>Gt. Times</title>
  //           <!--Import Google Icon Font-->
  //            <base href=${DOMAIN}/>
  //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //           <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  //           <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Jomolhari&display=swap" rel="stylesheet">
  //           <!--Import materialize.css-->
  //           <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
  //           <link type="text/css" rel="stylesheet" href="css/custom.css"  media="screen,projection"/>
  //           <!--Let browser know website is optimized for mobile-->
  //           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  //       </head>
  //       <body>
  //       <div id="root"></div>
  //       <script type="text/javascript" src="js/materialize.min.js"></script>
  //       <script src="main.bundle.js" ></script>
  //       </body>
  //       </html>

  //       `
  // );
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-common");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(25);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout() {
  return _react2.default.createElement(
    "div",
    null,
    (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
  );
};

exports.default = Layout;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(26);

var _App2 = _interopRequireDefault(_App);

var _MainPage = __webpack_require__(28);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _CategoryPage = __webpack_require__(30);

var _CategoryPage2 = _interopRequireDefault(_CategoryPage);

var _ArticlePage = __webpack_require__(32);

var _ArticlePage2 = _interopRequireDefault(_ArticlePage);

var _articleComments = __webpack_require__(36);

var _articleComments2 = _interopRequireDefault(_articleComments);

var _articleAddComment = __webpack_require__(39);

var _articleAddComment2 = _interopRequireDefault(_articleAddComment);

var _AuthorPage = __webpack_require__(40);

var _AuthorPage2 = _interopRequireDefault(_AuthorPage);

var _AuthorAbout = __webpack_require__(42);

var _AuthorAbout2 = _interopRequireDefault(_AuthorAbout);

var _AuthorArticles = __webpack_require__(43);

var _AuthorArticles2 = _interopRequireDefault(_AuthorArticles);

var _Login = __webpack_require__(44);

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(45);

var _Signup2 = _interopRequireDefault(_Signup);

var _Logout = __webpack_require__(46);

var _Logout2 = _interopRequireDefault(_Logout);

var _ReplaceArticle = __webpack_require__(47);

var _ReplaceArticle2 = _interopRequireDefault(_ReplaceArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  component: _App2.default,
  routes: [{
    component: _ReplaceArticle2.default,
    path: "/management/manage/templete/replace",
    exact: true
  }, {
    component: _Logout2.default,
    path: "/logout",
    exact: true
  }, {
    component: _Login2.default,
    path: "/auth/login",
    exact: true
  }, {
    component: _Signup2.default,
    path: "/auth/signup",
    exact: true
  }, {
    component: _MainPage2.default,
    path: "/",
    exact: true
  }, {
    component: _CategoryPage2.default,
    path: "/:category",
    exact: true
  }, {
    component: _ArticlePage2.default,
    path: "/article/:articleId",
    routes: [{
      component: _articleComments2.default,
      path: "/article/:articleId/comments",
      routes: [{
        component: _articleAddComment2.default,
        path: "/article/:articleId/comments/addComment"
      }]
    }]
  }, {
    component: _AuthorPage2.default,
    path: "/author/:authorId",
    routes: [{
      component: _AuthorAbout2.default,
      path: "/author/:authorId",
      exact: true
    }, {
      component: _AuthorArticles2.default,
      path: "/author/:authorId/articles",
      exact: true
    }]
  }]
}];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHooks = __webpack_require__(2);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(27);

var _Header2 = _interopRequireDefault(_Header);

var _auth = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 1),
      onMount = _useState2[0];

  var route = props.route,
      location = props.location;

  var _useQuery = (0, _reactHooks.useQuery)(_auth.fetchCurrentUser),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) {
    return _react2.default.createElement(
      "div",
      { id: "custom-loader" },
      _react2.default.createElement(
        "div",
        { className: "progress" },
        _react2.default.createElement("div", { className: "indeterminate" })
      )
    );
  }

  var user = data.currentUser;

  return _react2.default.createElement(
    "div",
    { className: "container-fluid" },
    _react2.default.createElement(_Header2.default, { currentUser: data.currentUser, location: location }),
    (0, _reactRouterConfig.renderRoutes)(route.routes, { user: user })
  );
}

exports.default = App;

// Important Notes to consider :

// 1) The serch Article functionality is currently not working very well .
// Not sorting in accordance with filter

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleSideNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// later we will check wheather the user is oauth or local, and then
// [present the appropirate logout button.]

function renderUserOptions(_ref) {
  var currentUser = _ref.currentUser;

  if (!currentUser) {
    return [_react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/auth/login" },
        "Login"
      )
    ), _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/auth/signup" },
        "Signup"
      )
    )];
  }

  if (currentUser.id) {
    return [_react2.default.createElement(
      "li",
      { key: 0 },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          onClick: function onClick() {
            return closeSideNav();
          },
          to: "/management/search"
          // to="/management/search?searchType=byTitle&query=SSL&pageNum=1&sortField=createdAt&sortOrder=Asc"
        },
        "Dashboard"
      )
    ), _react2.default.createElement(
      "li",
      { key: 1 },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/" },
        "Subscribe"
      )
    ), _react2.default.createElement(
      "li",
      { key: 2 },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/logout", replace: true },
        "Logout"
      )
    )];
  } else {
    return [_react2.default.createElement(
      "li",
      { key: 0 },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/auth/login" },
        "Login"
      )
    ), _react2.default.createElement(
      "li",
      { key: 1 },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { onClick: function onClick() {
            return closeSideNav();
          }, to: "/auth/signup" },
        "Signup"
      )
    )];
  }
}

function renderCategoriesNav(_ref2) {
  var location = _ref2.location;

  var current = location.pathname.slice(1);
  var categories = ["International", "US", "Politics", "Health", "Technology", "Sports", "Opinion"];
  return categories.map(function (cat) {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { key: cat, to: "/" + cat },
      _react2.default.createElement(
        "li",
        { className: "tab" },
        current == cat ? _react2.default.createElement(
          "a",
          { className: "active" },
          cat
        ) : _react2.default.createElement(
          "a",
          null,
          cat
        )
      )
    );
  });
}

function Header(props) {
  var currentUser = props.currentUser,
      location = props.location;


  return [_react2.default.createElement(
    "nav",
    { key: 0, id: "nav-extended-custom", className: "nav-extended" },
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/", className: "brand-logo", id: "gothamTimesLogo" },
        "Inside Los Angeles"
      ),
      _react2.default.createElement(
        "button",
        { id: "sidenav-toggler", onClick: function onClick() {
            return handleSideNav();
          } },
        _react2.default.createElement(
          "i",
          { className: "material-icons" },
          "menu"
        )
      ),
      _react2.default.createElement(
        "ul",
        { className: "right hide-on-med-and-down" },
        renderUserOptions({ currentUser: currentUser })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "nav-content" },
      _react2.default.createElement(
        "ul",
        { className: "tabs tabs-transparent" },
        renderCategoriesNav({ location: location })
      )
    )
  ),
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
  _react2.default.createElement(
    "ul",
    { key: 1, id: "mySidenav", className: "sidenav-w" },
    _react2.default.createElement(
      "button",
      {
        id: "header-mobile-sidenav-closebtn",
        className: "closebtn",
        onClick: function onClick() {
          return closeSideNav();
        }
      },
      "\xD7"
    ),
    renderUserOptions({ currentUser: currentUser })
  )];
}

exports.default = Header;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(10);

var _reactHooks = __webpack_require__(2);

var _section = __webpack_require__(29);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainPage(_ref) {
  var user = _ref.user;

  var _useQuery = (0, _reactHooks.useQuery)(_index.fetchHeadlines),
      headlines = _useQuery.data,
      fetchHeadlinesLoading = _useQuery.loading,
      fetchHeadlinesError = _useQuery.error;

  var _useQuery2 = (0, _reactHooks.useQuery)(_index.fetchEditorsPick),
      editorsPick = _useQuery2.data,
      fetchEditorsPickLoading = _useQuery2.loading,
      fetchEditorsPickError = _useQuery2.error;

  if (fetchHeadlinesLoading || fetchEditorsPickLoading) return _react2.default.createElement(
    "div",
    { className: "progress" },
    _react2.default.createElement("div", { className: "indeterminate" })
  );

  if (fetchHeadlinesError || fetchEditorsPickError) {
    return _react2.default.createElement(
      "div",
      null,
      "Something went wrong ."
    );
  }

  var fetchMainTemplete = headlines.fetchMainTemplete;

  return _react2.default.createElement(
    "div",
    { className: "container-fluid" },
    _react2.default.createElement(_section2.default, {
      headlines: fetchMainTemplete,
      editorsPick: editorsPick.fetchMainTemplete.editorsPick,
      user: user
    })
  );
}

exports.default = MainPage;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMoment = __webpack_require__(5);

var _reactMoment2 = _interopRequireDefault(_reactMoment);

__webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function articleManageOptions(_ref) {
  var pageT = _ref.pageT,
      section = _ref.section,
      _ref$indexInSection = _ref.indexInSection,
      indexInSection = _ref$indexInSection === undefined ? null : _ref$indexInSection,
      user = _ref.user;

  // enum refetch Queries [
  //  fetchHeadlines, fetchEditorsPick
  // ]

  if (!user) return;
  if (user.badge !== "CONTENT_MANAGER") return;
  var editLink = "/management/manage/templete/replace?pageT=" + pageT + "&section=" + section;
  if (indexInSection !== null) editLink += "&indexInSection=" + indexInSection;
  switch (section) {
    case "editorsPick":
      editLink += "&refetchQueries=fetchEditorsPick";
      break;
    default:
      editLink += "&refetchQueries=fetchHeadlines";
      break;
  }
  return _react2.default.createElement(
    "div",
    { className: "col s12 m12 l12 right-align" },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: editLink },
      _react2.default.createElement(
        "i",
        { "class": "material-icons" },
        "create"
      )
    )
  );
}

function renderEditorsPick(_ref2) {
  var editorsPick = _ref2.editorsPick,
      history = _ref2.history,
      user = _ref2.user;

  return editorsPick.map(function (article, index) {
    return _react2.default.createElement(
      "div",
      { key: article.id, className: "col s12 m12 l12 xl12 side-section-card" },
      articleManageOptions({
        pageT: "main",
        section: "editorsPick",
        indexInSection: index,
        user: user
      }),
      _react2.default.createElement(
        "div",
        {
          className: "col s12 m6 l6 xl6 pointCursor",
          id: "side-section-card-left",
          onClick: function onClick() {
            return history.push("/article/" + article.id);
          }
        },
        _react2.default.createElement(
          "h6",
          { className: "bold gray zero-margin" },
          "@",
          article.authorId.username
        ),
        _react2.default.createElement(
          "h6",
          {
            id: "mobile-main-sec1-editorsPick-title",
            className: "bold zero-margin"
          },
          article.title.slice(0, 30)
        ),
        _react2.default.createElement(
          "p",
          { id: "mobile-main-sec1-editorsPick-p" },
          article.content[0].slice(0, 150)
        ),
        _react2.default.createElement(
          _reactMoment2.default,
          { fromNow: true },
          new Date(parseInt(article.createdAt))
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m6 l6 xl6" },
        _react2.default.createElement("img", {
          id: "mobile-main-sec1-editorsPick-img",
          className: "materialboxed",
          width: "200",
          height: "200",
          src: "https://cdn.pixabay.com/photo/2016/11/22/19/08/blur-1850082__340.jpg"
        })
      )
    );
  });
}

function Section1(_ref3) {
  var headlines = _ref3.headlines,
      editorsPick = _ref3.editorsPick,
      history = _ref3.history,
      user = _ref3.user;

  // materialize initialization

  var headline1 = headlines.headline1,
      headline2 = headlines.headline2,
      headline3 = headlines.headline3,
      headline4 = headlines.headline4,
      headline5 = headlines.headline5;

  return _react2.default.createElement(
    "div",
    { className: "section row" },
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l8 xl8" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12" },
          _react2.default.createElement(
            "div",
            { className: "row pointCursor", id: "mobile-main-sec1-hd1" },
            articleManageOptions({
              pageT: "main",
              section: "headline1",
              user: user
            }),
            _react2.default.createElement(
              "div",
              {
                className: "col s12 m6 l6 xl6",
                onClick: function onClick() {
                  return history.push("/article/" + headline1.id);
                }
              },
              _react2.default.createElement(
                "h5",
                { id: "mobile-main-sec1-hd1-h" },
                headline1.title.slice(0, 50),
                " ..."
              ),
              _react2.default.createElement(
                "p",
                { id: "mobile-main-sec1-hd1-p" },
                headline1.content[0].slice(0, 305)
              ),
              _react2.default.createElement(
                _reactMoment2.default,
                { fromNow: true },
                new Date(parseInt(headline1.createdAt))
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col s12 m6 l6 xl6" },
              _react2.default.createElement("img", {
                id: "mobile-main-sec1-hd1-img",
                className: "materialboxed",
                width: "400",
                src: "https://pmcvariety.files.wordpress.com/2019/03/trump-1.jpg?w=1000"
              })
            )
          )
        ),
        _react2.default.createElement("div", { className: "col s12 m12 l12 border-seperator-horizontal" }),
        _react2.default.createElement(
          "div",
          {
            id: "mobile-main-sec1-hd3",
            className: "col s12 m6 l6 right-border-seperator"
          },
          _react2.default.createElement(
            "div",
            { className: "row" },
            articleManageOptions({
              pageT: "main",
              section: "headline3",
              user: user
            }),
            _react2.default.createElement(
              "div",
              {
                onClick: function onClick() {
                  return history.push("/article/" + headline3.id);
                },
                className: "col s12 pointCursor"
              },
              _react2.default.createElement(
                "h5",
                { id: "mobile-main-sec1-hd3-h" },
                headline3.title.slice(0, 50),
                " ..."
              ),
              _react2.default.createElement(
                "p",
                { id: "mobile-main-sec1-hd3-p" },
                headline3.content[0].slice(0, 305)
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  _reactMoment2.default,
                  { fromNow: true },
                  new Date(parseInt(headline3.createdAt))
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m6 l6" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              {
                id: "mobile-main-sec1-hd4",
                className: "col s12 m12 l12 pointCursor"
              },
              _react2.default.createElement(
                "div",
                { className: "row" },
                articleManageOptions({
                  pageT: "main",
                  section: "headline4",
                  user: user
                }),
                _react2.default.createElement(
                  "div",
                  {
                    onClick: function onClick() {
                      return history.push("/article/" + headline4.id);
                    },
                    className: "col s12"
                  },
                  _react2.default.createElement(
                    "h5",
                    { id: "mobile-main-sec1-hd4-h" },
                    headline4.title.slice(0, 50),
                    " ..."
                  ),
                  _react2.default.createElement(
                    _reactMoment2.default,
                    { fromNow: true },
                    new Date(parseInt(headline4.createdAt))
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              {
                id: "mobile-main-sec1-hd5",
                className: "col s12 m12 l12 pointCursor"
              },
              _react2.default.createElement(
                "div",
                { className: "row" },
                articleManageOptions({
                  pageT: "main",
                  section: "headline5",
                  user: user
                }),
                _react2.default.createElement(
                  "div",
                  {
                    onClick: function onClick() {
                      return history.push("/article/" + headline5.id);
                    },
                    className: "col s12"
                  },
                  _react2.default.createElement(
                    "h5",
                    { id: "mobile-main-sec1-hd5-h" },
                    headline5.title.slice(0, 50),
                    " ..."
                  ),
                  _react2.default.createElement(
                    _reactMoment2.default,
                    { fromNow: true },
                    new Date(parseInt(headline5.createdAt))
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement("div", { className: "col s12 m12 l12 border-seperator-horizontal" }),
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            articleManageOptions({
              pageT: "main",
              section: "headline2",
              user: user
            }),
            _react2.default.createElement(
              "div",
              {
                onClick: function onClick() {
                  return history.push("/article/" + headline2.id);
                },
                id: "mobile-main-sec1-hd2",
                className: "col s12 m6 l6 xl6 pointCursor"
              },
              _react2.default.createElement(
                "h5",
                { id: "mobile-main-sec1-hd2-h" },
                headline2.title.slice(0, 50),
                " ..."
              ),
              _react2.default.createElement(
                "p",
                { id: "mobile-main-sec1-hd2-p" },
                headline2.content[0].slice(0, 305)
              ),
              _react2.default.createElement(
                _reactMoment2.default,
                { fromNow: true },
                new Date(parseInt(headline2.createdAt))
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col s12 m6 l6 xl6" },
              _react2.default.createElement("img", {
                id: "mobile-main-sec1-hd2-img",
                className: "materialboxed",
                width: "400",
                src: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg"
              })
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l4 xl4 " },
      _react2.default.createElement(
        "div",
        { className: "left-border-seperator-main row" },
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "h6",
              {
                id: "mobile-main-sec1-editorsPick-heading",
                className: "col s12 m12 l12 xl12 section-side-heading"
              },
              "Editors' Pick"
            ),
            renderEditorsPick({ editorsPick: editorsPick, history: history, user: user })
          )
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Section1);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _categoryPage = __webpack_require__(11);

var _section = __webpack_require__(31);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoryPage(_ref) {
  var location = _ref.location,
      user = _ref.user;

  var categoryName = location.pathname.slice(1);

  var _useQuery = (0, _reactHooks.useQuery)(_categoryPage.fetchCategoryTemplete, {
    variables: {
      input: {
        name: categoryName
      }
    }
  }),
      headlines = _useQuery.data,
      headlinesLoading = _useQuery.loading,
      headlinesError = _useQuery.error;

  var _useQuery2 = (0, _reactHooks.useQuery)(_categoryPage.fetchCategoryLatest, {
    variables: {
      input: {
        name: categoryName
      }
    }
  }),
      latest = _useQuery2.data,
      latestLoading = _useQuery2.loading,
      latestError = _useQuery2.error;

  var _useQuery3 = (0, _reactHooks.useQuery)(_categoryPage.fetchCategoryHot, {
    variables: {
      input: {
        name: categoryName
      }
    }
  }),
      hotest = _useQuery3.data,
      hotestLoading = _useQuery3.loading,
      hotestError = _useQuery3.error;

  if (headlinesLoading || latestLoading || hotestLoading) return _react2.default.createElement(
    "div",
    { id: "custom-loader" },
    _react2.default.createElement(
      "div",
      { className: "progress" },
      _react2.default.createElement("div", { className: "indeterminate" })
    )
  );
  return _react2.default.createElement(
    "div",
    { className: "section row" },
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l12" },
      _react2.default.createElement(
        "h3",
        null,
        categoryName
      )
    ),
    _react2.default.createElement(_section2.default, {
      headlines: headlines.fetchCategoryTemplete,
      latest: latest.fetchCategoryLatest,
      hotest: hotest.fetchCategoryHot,
      user: user,
      categoryName: categoryName
    })
  );
}

exports.default = (0, _reactRouterDom.withRouter)(CategoryPage);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMoment = __webpack_require__(5);

var _reactMoment2 = _interopRequireDefault(_reactMoment);

__webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function articleManageOptions(_ref) {
  var pageT = _ref.pageT,
      section = _ref.section,
      _ref$indexInSection = _ref.indexInSection,
      indexInSection = _ref$indexInSection === undefined ? null : _ref$indexInSection,
      user = _ref.user;

  // enum refetch Queries = fetchCategoryLatest fetchCategoryTemplete
  if (!user) return;
  if (user.badge !== "CONTENT_MANAGER") return;
  var editLink = "/management/manage/templete/replace?pageT=" + pageT + "&section=" + section;
  if (indexInSection !== null) editLink += "&indexInSection=" + indexInSection;
  editLink += "&refetchQueries=fetchCategoryTemplete";
  return _react2.default.createElement(
    "div",
    { className: "col s12 m12 l12 right-align" },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: editLink },
      _react2.default.createElement(
        "i",
        { "class": "material-icons" },
        "create"
      )
    )
  );
}

function renderLatest(_ref2) {
  var latest = _ref2.latest,
      history = _ref2.history;

  return latest.map(function (article) {
    return _react2.default.createElement(
      "div",
      { className: "col s12 m12 l12 xl12 side-section-card" },
      _react2.default.createElement(
        "div",
        {
          className: "col s12 m6 l6 xl6 pointCursor",
          id: "side-section-card-left",
          onClick: function onClick() {
            return history.push("/article/" + article.id);
          }
        },
        _react2.default.createElement(
          "h6",
          { className: "bold gray zero-margin" },
          "@",
          article.authorId.username
        ),
        _react2.default.createElement(
          "h6",
          {
            id: "mobile-main-sec1-editorsPick-title",
            className: "bold zero-margin"
          },
          article.title.slice(0, 30)
        ),
        _react2.default.createElement(
          "p",
          { id: "mobile-main-sec1-editorsPick-p" },
          article.content[0].slice(0, 150)
        ),
        _react2.default.createElement(
          _reactMoment2.default,
          { fromNow: true },
          new Date(parseInt(article.createdAt))
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m6 l6 xl6" },
        _react2.default.createElement("img", {
          id: "mobile-main-sec1-editorsPick-img",
          className: "materialboxed",
          width: "200",
          height: "200",
          src: "https://cdn.pixabay.com/photo/2016/11/22/19/08/blur-1850082__340.jpg"
        })
      )
    );
  });
}

function Section1(_ref3) {
  var headlines = _ref3.headlines,
      latest = _ref3.latest,
      hotest = _ref3.hotest,
      history = _ref3.history,
      user = _ref3.user,
      categoryName = _ref3.categoryName;
  var headline1 = headlines.headline1,
      headline2 = headlines.headline2,
      headline3 = headlines.headline3;

  return _react2.default.createElement(
    "div",
    { className: "section row col s12 m12 l12" },
    _react2.default.createElement(
      "div",
      { className: "row col s12 m8 l8" },
      _react2.default.createElement(
        "div",
        { className: "row pointCursor" },
        articleManageOptions({
          pageT: categoryName,
          section: "headline1",
          user: user
        }),
        _react2.default.createElement(
          "div",
          {
            onClick: function onClick() {
              return history.push("/article/" + headline1.id);
            },
            className: "col s12 m6 l6 xl6"
          },
          _react2.default.createElement(
            "h5",
            { id: "mobile-main-sec1-hd1-h" },
            headline1.title,
            " "
          ),
          _react2.default.createElement(
            "p",
            { id: "mobile-main-sec1-hd1-p" },
            headline1.content[0].slice(0, 305)
          ),
          _react2.default.createElement(
            _reactMoment2.default,
            { fromNow: true },
            new Date(parseInt(headline1.createdAt))
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m6 l6 xl6" },
          _react2.default.createElement("img", {
            id: "mobile-main-sec1-hd1-img",
            className: "materialboxed",
            width: "400",
            src: "https://cdn.pixabay.com/photo/2019/03/03/14/38/hacker-4031973_960_720.jpg"
          })
        )
      ),
      _react2.default.createElement("div", { className: "col s12 m12 l12 border-seperator-horizontal" }),
      _react2.default.createElement(
        "div",
        {
          id: "mobile-main-sec1-hd3",
          className: "col s12 m6 l6 right-border-seperator pointCursor"
        },
        articleManageOptions({
          pageT: categoryName,
          section: "headline2",
          user: user
        }),
        _react2.default.createElement(
          "div",
          {
            onClick: function onClick() {
              return history.push("/article/" + headline2.id);
            },
            className: "row"
          },
          _react2.default.createElement(
            "h5",
            { id: "mobile-main-sec1-hd3-h" },
            headline2.title
          ),
          _react2.default.createElement(
            "p",
            { id: "mobile-main-sec1-hd3-p" },
            headline2.content[0].slice(0, 305)
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              _reactMoment2.default,
              { fromNow: true },
              new Date(parseInt(headline2.createdAt))
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { id: "mobile-main-sec1-hd3", className: "col s12 m6 l6 pointCursor" },
        articleManageOptions({
          pageT: categoryName,
          section: "headline3",
          user: user
        }),
        _react2.default.createElement(
          "div",
          {
            onClick: function onClick() {
              return history.push("/article/" + headline3.id);
            },
            className: "row"
          },
          _react2.default.createElement(
            "h5",
            { id: "mobile-main-sec1-hd3-h" },
            headline3.title.slice(0, 50),
            " ..."
          ),
          _react2.default.createElement(
            "p",
            { id: "mobile-main-sec1-hd3-p" },
            headline3.content[0].slice(0, 305)
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              _reactMoment2.default,
              { fromNow: true },
              new Date(parseInt(headline3.createdAt))
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l4 xl4 " },
      _react2.default.createElement(
        "div",
        { className: "left-border-seperator-main row" },
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "h6",
              {
                id: "mobile-main-sec1-editorsPick-heading",
                className: "col s12 m12 l12 xl12 section-side-heading"
              },
              "Latest"
            ),
            renderLatest({ latest: latest, history: history })
          )
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Section1);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// importing components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _articlePage = __webpack_require__(12);

var _reactRouterConfig = __webpack_require__(4);

var _articleHeader = __webpack_require__(33);

var _articleHeader2 = _interopRequireDefault(_articleHeader);

var _articleContent = __webpack_require__(35);

var _articleContent2 = _interopRequireDefault(_articleContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArticlePage(_ref) {
  var match = _ref.match,
      route = _ref.route,
      user = _ref.user;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 1),
      justOnMount = _useState4[0];

  var articleId = match.params.articleId;

  var _useQuery = (0, _reactHooks.useQuery)(_articlePage.article, {
    variables: {
      id: articleId
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  // adding event Listenier only on intial render


  (0, _react.useEffect)(function () {
    setWidth(window.innerWidth);
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }, [justOnMount]);
  // removing the event listener on unmount of component
  (0, _react.useEffect)(function () {
    return function () {
      window.removeEventListener("resize", function () {
        setWidth(window.innerWidth);
      });
    };
  });

  if (loading) {
    return _react2.default.createElement(
      "div",
      { id: "custom-loader" },
      _react2.default.createElement(
        "div",
        { className: "progress" },
        _react2.default.createElement("div", { className: "indeterminate" })
      )
    );
  }

  var _data$article = data.article,
      article = _data$article.article,
      isLiked = _data$article.isLiked;

  return _react2.default.createElement(
    "div",
    { className: "row" },
    _react2.default.createElement(
      "div",
      { className: "col s12 m10 l8 xl8" },
      _react2.default.createElement(_articleHeader2.default, {
        article: article,
        width: width,
        isLiked: isLiked,
        user: user
      }),
      _react2.default.createElement(_articleContent2.default, { article: article }),
      (0, _reactRouterConfig.renderRoutes)(route.routes, { deviceWidth: width, user: user })
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(ArticlePage);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMoment = __webpack_require__(5);

var _reactMoment2 = _interopRequireDefault(_reactMoment);

__webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _like = __webpack_require__(34);

var _articlePage = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArticleHeader(_ref) {
  var article = _ref.article,
      isLiked = _ref.isLiked,
      user = _ref.user;

  var _useMutation = (0, _reactHooks.useMutation)(_like.likeArticle),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateLikeArticle = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      likeArticleResponse = _useMutation2$.data,
      likeArticleLoading = _useMutation2$.loading,
      likeArticleError = _useMutation2$.error;

  var articleId = article.id,
      title = article.title,
      likes = article.likes,
      comments = article.comments,
      _article$authorId = article.authorId,
      username = _article$authorId.username,
      profileImg = _article$authorId.profileImg,
      authorId = _article$authorId.id,
      createdAt = article.createdAt;

  var profileImgStyle = {
    borderRadius: "50%"
  };
  var usernameStyle = {
    fontSize: "medium",
    fontWeight: "bold",
    color: "#ada2a2"
  };
  var numberOfLikes = likes.length;
  var iconStyle = {
    color: "black"
  };
  if (likeArticleLoading) {
    if (isLiked) {
      numberOfLikes--;
      iconStyle = {
        color: "black",
        cursor: "default"
      };
    } else {
      numberOfLikes++;
      iconStyle = {
        color: "#039be5",
        cursor: "default"
      };
    }
  } else {
    if (isLiked) {
      numberOfLikes = likes.length;
      iconStyle = {
        color: "#039be5"
      };
    } else {
      numberOfLikes = likes.length;
      iconStyle = {
        color: "black"
      };
    }
  }

  return _react2.default.createElement(
    "div",
    { className: "col s12 m12 l12 xl12" },
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l12" },
      _react2.default.createElement(
        "h5",
        { className: "left-align" },
        title
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col s12 m12 l12 left-align" },
      _react2.default.createElement(
        "div",
        { className: "row valign-wrapper left-align" },
        _react2.default.createElement(
          "div",
          { className: "col s3 m3 l1" },
          _react2.default.createElement("img", {
            style: profileImgStyle,
            src: profileImg,
            className: "materialboxed",
            width: 60
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "col s8 m8 l11", style: usernameStyle },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId },
            "@",
            username
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col l7 m6 s6 left-align" },
      _react2.default.createElement(
        _reactMoment2.default,
        { className: "article-header-likesAndComment" },
        new Date(parseInt(article.createdAt))
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "col s6 m6 l5 ", id: "article-header-topCount" },
      _react2.default.createElement(
        "div",
        { className: "article-header-likesAndComment" },
        _react2.default.createElement(
          "span",
          null,
          numberOfLikes
        )
      ),
      _react2.default.createElement(
        "div",
        {
          className: !user ? "article-header-likesAndComment popLogin" : "article-header-likesAndComment"
        },
        _react2.default.createElement(
          "i",
          {
            id: "likeIcon",
            style: iconStyle,
            onClick: function onClick() {
              if (!user) return false;
              mutateLikeArticle({
                variables: {
                  input: { articleId: articleId }
                },
                awaitRefetchQueries: true,
                refetchQueries: [{
                  query: _articlePage.article,
                  variables: {
                    id: articleId
                  }
                }]
              });
            },
            className: "material-icons"
          },
          "thumb_up"
        ),
        _react2.default.createElement(
          "span",
          { id: "popLoginText-top", className: "popLoginText" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/auth/login" },
            "Login First"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "article-header-likesAndComment" },
        _react2.default.createElement(
          "span",
          null,
          comments.length
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: "/article/" + articleId + "/comments",
          className: "article-header-likesAndComment"
        },
        _react2.default.createElement(
          "i",
          { className: "material-icons" },
          "chat"
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(ArticleHeader);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    mutation like($input: likeArticleInputType) {\n      likeArticle(input: $input) {\n        id\n        createdAt\n      }\n    }\n  "], ["\n    mutation like($input: likeArticleInputType) {\n      likeArticle(input: $input) {\n        id\n        createdAt\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  likeArticle: (0, _graphqlTag2.default)(_templateObject)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderParas(content) {
  return content.map(function (para) {
    return _react2.default.createElement(
      "p",
      { className: "left-align articleContent-para" },
      para
    );
  });
}

function ArticleContent(_ref) {
  var article = _ref.article;
  var content = article.content;


  return _react2.default.createElement(
    "div",
    { className: "col s12 m12 l12" },
    _react2.default.createElement("img", {
      onClick: function onClick(e) {
        var instance = M.Materialbox.getInstance(e.target);
        instance.open();
      },
      className: "materialboxed",
      src: "https://cdn.pixabay.com/photo/2019/09/28/00/36/plow-4509660_960_720.jpg",
      width: 500
    }),
    _react2.default.createElement(
      "div",
      null,
      renderParas(content)
    )
  );
}

exports.default = ArticleContent;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import { fetchComments } from "../../queries/articlePage/comments";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _comments = __webpack_require__(13);

var _comment = __webpack_require__(14);

var _reactRouterConfig = __webpack_require__(4);

var _reactFontawesome = __webpack_require__(37);

var _freeSolidSvgIcons = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleCloseComments(articleId, history) {
  document.getElementById("articleComments").style.width = "0";
  setTimeout(function () {
    history.go(-1);
  }, 500);
}

function commentsAuthorizedButtons(_ref) {
  var comment = _ref.comment,
      user = _ref.user,
      mutateDeleteComment = _ref.mutateDeleteComment,
      articleId = _ref.articleId;

  if (!user) return;
  if (comment.readerId.id === user.id) {
    return _react2.default.createElement(
      "div",
      { className: "right-align" },
      _react2.default.createElement(
        "i",
        {
          onClick: function onClick() {
            mutateDeleteComment({
              variables: {
                input: { id: comment.id }
              },
              awaitRefetchQueries: true,
              refetchQueries: [{
                query: _comments.fetchComments,
                variables: {
                  id: articleId
                }
              }]
            });
          },
          "class": "material-icons"
        },
        "delete"
      )
    );
  }
}

function renderComments(_ref2) {
  var comments = _ref2.comments,
      user = _ref2.user,
      mutateDeleteComment = _ref2.mutateDeleteComment,
      articleId = _ref2.articleId;

  return comments.map(function (comment) {
    return _react2.default.createElement(
      "div",
      { "class": "dialogbox" },
      _react2.default.createElement(
        "div",
        { className: "imgDiv" },
        _react2.default.createElement("img", {
          src: comment.readerId.profileImg,
          className: "materialboxed",
          width: 60
        })
      ),
      _react2.default.createElement(
        "div",
        { "class": "body" },
        _react2.default.createElement("span", { "class": "tip tip-left" }),
        _react2.default.createElement(
          "div",
          { "class": "message" },
          _react2.default.createElement(
            "span",
            null,
            comment.content
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/reader/" + comment.readerId.id },
            " ",
            "@",
            comment.readerId.username
          ),
          commentsAuthorizedButtons({
            comment: comment,
            user: user,
            mutateDeleteComment: mutateDeleteComment,
            articleId: articleId
          })
        )
      )
    );
  });
}

function ArticleComments(_ref3) {
  var match = _ref3.match,
      history = _ref3.history,
      route = _ref3.route,
      deviceWidth = _ref3.deviceWidth,
      user = _ref3.user;

  // COMMENTS
  // The functionality about the upgrade of comments likes and, repsonses and donw votes,
  // wll be added later, and then useLazyQuery will be used to handle those refreshes,
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setStateComments = _useState2[1];

  var articleId = match.params.articleId;

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 1),
      onlyOnce = _useState4[0];
  // only once when component is mounted ;

  var _useQuery = (0, _reactHooks.useQuery)(_comments.fetchComments, {
    variables: {
      id: articleId
    }
  }),
      useQData = _useQuery.data,
      useQLoading = _useQuery.loading,
      useQError = _useQuery.error;

  // defining deleteComment mutation and passind down to render comments
  // and then deleteComment function;


  var _useMutation = (0, _reactHooks.useMutation)(_comment.deleteComment),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateDeleteComment = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      deleteCommentResponse = _useMutation2$.data,
      deleteCommentLoading = _useMutation2$.loading,
      deleteCommentError = _useMutation2$.error;

  (0, _react.useEffect)(function () {
    if (deviceWidth > 1000) {
      document.getElementById("articleComments").style.width = "30%";
    } else if (deviceWidth > 600) {
      document.getElementById("articleComments").style.width = "50%";
    } else {
      document.getElementById("articleComments").style.width = "100%";
    }
  }, [onlyOnce, deviceWidth]);
  if (useQLoading) {
    return _react2.default.createElement(
      "div",
      {
        id: "articleComments",
        className: "articleComments-sideNav center-align"
      },
      _react2.default.createElement(
        "div",
        { id: "articleComments-loading" },
        _react2.default.createElement(
          "div",
          { "class": "preloader-wrapper active" },
          _react2.default.createElement(
            "div",
            { "class": "spinner-layer spinner-red-only" },
            _react2.default.createElement(
              "div",
              { "class": "circle-clipper left" },
              _react2.default.createElement("div", { "class": "circle" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "gap-patch" },
              _react2.default.createElement("div", { "class": "circle" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "circle-clipper right" },
              _react2.default.createElement("div", { "class": "circle" })
            )
          )
        )
      )
    );
  }

  return _react2.default.createElement(
    "div",
    { id: "articleComments", className: "articleComments-sideNav" },
    _react2.default.createElement(
      "div",
      { id: "commentsTopButtons" },
      _react2.default.createElement(
        "div",
        { className: "commentsTopButton  commentsTopButtonHeader" },
        useQData.article.article.comments.length,
        " Comments"
      ),
      _react2.default.createElement(
        "div",
        {
          className: !user ? "commentsTopButton popLogin" : "commentsTopButton"
        },
        user ? _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/article/" + articleId + "/comments/addComment" },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFeather })
        ) : _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/article/" + articleId + "/comments", replace: true },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFeather })
        ),
        _react2.default.createElement(
          "span",
          {
            id: "popLoginText-left",
            className: "addCommentpopLogin popLoginText"
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/auth/login" },
            "Login First"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "commentsTopButton" },
        _react2.default.createElement(
          "button",
          {
            className: "close-button",
            onClick: function onClick() {
              return handleCloseComments(articleId, history);
            }
          },
          "X"
        )
      )
    ),
    (0, _reactRouterConfig.renderRoutes)(route.routes),
    _react2.default.createElement(
      "div",
      { id: "commentsDiv", className: "container" },
      deleteCommentLoading ? _react2.default.createElement(
        "div",
        { id: "custom-loader" },
        _react2.default.createElement(
          "div",
          { style: { flexBasis: "100%" }, "class": "progress" },
          _react2.default.createElement("div", { "class": "indeterminate" })
        )
      ) : _react2.default.createElement(
        "div",
        { style: { background: "transparent" }, id: "custom-loader" },
        _react2.default.createElement(
          "div",
          { style: { background: "transparent" }, "class": "progress" },
          _react2.default.createElement("div", {
            style: { background: "transparent" },
            "class": "indeterminate"
          })
        )
      ),
      renderComments({
        comments: useQData.article.article.comments,
        user: user,
        mutateDeleteComment: mutateDeleteComment,
        articleId: articleId
      })
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(ArticleComments);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _comment = __webpack_require__(14);

var _comments = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function closeForm(articleId, history) {
  // document.getElementById("addComment").style.width = "0";
  document.getElementById("addComment").style.transform = "translateX(-500px)";
  setTimeout(function () {
    history.go(-1);
  }, 500);
}

function AddComment(_ref) {
  var match = _ref.match,
      history = _ref.history;

  var _useMutation = (0, _reactHooks.useMutation)(_comment.createComment),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateCreateComment = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var articleId = match.params.articleId;

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 1),
      onlyOnce = _useState4[0];

  (0, _react.useEffect)(function () {
    var width = window.innerWidth - 520;
    // document.getElementById("addComment").style.width = `100%`;
    document.getElementById("addComment").style.transform = "translateX(0px)";
  }, [onlyOnce]);

  // if (data) {
  //   setComment("");
  //   closeForm(articleId, history);
  // }

  return _react2.default.createElement(
    "div",
    { id: "addComment" },
    _react2.default.createElement(
      "div",
      { id: "addCommentForm", "class": "row" },
      _react2.default.createElement(
        "form",
        {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            mutateCreateComment({
              variables: {
                input: { content: comment, articleId: articleId }
              },
              awaitRefetchQueries: true,
              refetchQueries: [{
                query: _comments.fetchComments,
                variables: {
                  id: articleId
                }
              }],
              update: function update(cache, data) {
                closeForm(articleId, history);
              }
            });
          },
          id: "addCommentForm-form",
          "class": "col s12"
        },
        loading ? _react2.default.createElement(
          "div",
          { id: "custom-loader" },
          _react2.default.createElement(
            "div",
            { style: { flexBasis: "100%" }, "class": "progress" },
            _react2.default.createElement("div", { "class": "indeterminate" })
          )
        ) : _react2.default.createElement(
          "div",
          { style: { background: "transparent" }, id: "custom-loader" },
          _react2.default.createElement(
            "div",
            { style: { background: "transparent" }, "class": "progress" },
            _react2.default.createElement("div", {
              style: { background: "transparent" },
              "class": "indeterminate"
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { "class": "dialogbox" },
          _react2.default.createElement(
            "div",
            { className: "imgDiv" },
            _react2.default.createElement("img", {
              src: "https://s3.amazonaws.com/uifaces/faces/twitter/jpenico/128.jpg",
              className: "materialboxed",
              width: 60
            })
          ),
          _react2.default.createElement(
            "div",
            { "class": "body" },
            _react2.default.createElement("span", { "class": "tip tip-left" }),
            _react2.default.createElement(
              "div",
              { "class": "message" },
              _react2.default.createElement(
                "textarea",
                {
                  onChange: function onChange(e) {
                    return setComment(e.target.value);
                  },
                  className: "commentFo"
                },
                comment
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "options" },
              _react2.default.createElement(
                "button",
                {
                  onClick: function onClick(e) {
                    e.preventDefault();
                    closeForm(articleId, history);
                  },
                  className: "waves-effect waves-light btn btn-small"
                },
                "Discard"
              ),
              _react2.default.createElement(
                "button",
                {
                  "class": "btn waves-effect waves-light btn-small",
                  type: "submit",
                  name: "action"
                },
                "Submit",
                _react2.default.createElement(
                  "i",
                  { "class": "material-icons right" },
                  "send"
                )
              )
            )
          )
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(AddComment);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

var _AuthorHeader = __webpack_require__(41);

var _AuthorHeader2 = _interopRequireDefault(_AuthorHeader);

var _reactHooks = __webpack_require__(2);

var _index = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// just to minimize the number of queries made, we are going to use apollo hook
// here and pass the minimal data to the basic route

function AuthorPage(_ref) {
  var route = _ref.route,
      authorId = _ref.match.params.authorId;

  var _useQuery = (0, _reactHooks.useQuery)(_index.fetchAuthor, {
    variables: {
      id: authorId
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) {
    return _react2.default.createElement(
      "div",
      { id: "custom-loader" },
      _react2.default.createElement(
        "div",
        { className: "progress" },
        _react2.default.createElement("div", { className: "indeterminate" })
      )
    );
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_AuthorHeader2.default, { author: data.author }),
    (0, _reactRouterConfig.renderRoutes)(route.routes, { author: data.author })
  );
}

exports.default = (0, _reactRouterDom.withRouter)(AuthorPage);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthorHeader(_ref) {
  var _ref$author = _ref.author,
      authorId = _ref$author.id,
      username = _ref$author.username,
      profileImg = _ref$author.profileImg,
      pathname = _ref.location.pathname;

  var profileImgStyle = {
    borderRadius: "50%"
  };
  var usernameStyle = {
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
  return _react2.default.createElement(
    "nav",
    { "class": "nav-extended" },
    _react2.default.createElement(
      "div",
      { id: "authorHeader", "class": "nav-content" },
      _react2.default.createElement(
        "ul",
        { "class": "tabs tabs-transparent" },
        _react2.default.createElement(
          "li",
          { "class": "tab disabled" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId },
            "@",
            username
          )
        ),
        pathname === "/author/" + authorId ? _react2.default.createElement(
          "li",
          { "class": "tab active" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId },
            "About"
          )
        ) : _react2.default.createElement(
          "li",
          { "class": "tab" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId },
            "About"
          )
        ),
        pathname === "/author/" + authorId + "/articles" ? _react2.default.createElement(
          "li",
          { "class": "tab active" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId + "/articles" },
            "Articles"
          )
        ) : _react2.default.createElement(
          "li",
          { "class": "tab" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/author/" + authorId + "/articles" },
            "Articles"
          )
        )
      )
    )
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

exports.default = (0, _reactRouterDom.withRouter)(AuthorHeader);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthorAbout(_ref) {
  var _ref$author = _ref.author,
      authorId = _ref$author.id,
      username = _ref$author.username,
      profileImg = _ref$author.profileImg,
      fName = _ref$author.fName,
      lName = _ref$author.lName,
      phoneNumber = _ref$author.phoneNumber,
      email = _ref$author.email,
      address = _ref$author.address;

  return _react2.default.createElement(
    "div",
    { id: "authorAboutWrapper", className: "container" },
    _react2.default.createElement(
      "div",
      { id: "authorAbout", className: "row" },
      _react2.default.createElement(
        "div",
        { id: "authorAboutProfileImg", className: "col s12 m12 l3 center-align" },
        _react2.default.createElement("img", { className: "materialboxed", width: 100, src: profileImg })
      ),
      _react2.default.createElement(
        "div",
        { id: "authorAboutInfo", className: "col s12 m12 l9" },
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "Username"
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            username
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "First Name"
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            fName
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "Last Name"
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            lName
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "Phone Number "
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            phoneNumber
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "Email"
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            email
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "authorAboutInfo-info" },
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-label" },
            "Address"
          ),
          _react2.default.createElement(
            "span",
            { className: "authorAboutInfo-data" },
            "Street : " + address.street + ", City : " + address.city
          )
        )
      )
    )
  );
}

exports.default = AuthorAbout;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactMoment = __webpack_require__(5);

var _reactMoment2 = _interopRequireDefault(_reactMoment);

__webpack_require__(6);

var _reactHooks = __webpack_require__(2);

var _index = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openArticle(_ref) {
  var articleId = _ref.articleId,
      history = _ref.history;

  history.push("/article/" + articleId);
}

function renderArticles(_ref2) {
  var articles = _ref2.articles,
      history = _ref2.history;

  return articles.map(function (article) {
    var articleId = article.id,
        title = article.title,
        content = article.content,
        createdAt = article.createdAt,
        category = article.category;

    return _react2.default.createElement(
      "div",
      {
        onClick: function onClick() {
          return openArticle({ articleId: articleId, history: history });
        },
        className: "col s12 m12 l12 xl12 authorArticleWrapper"
      },
      _react2.default.createElement(
        "div",
        { className: "row authorArticle" },
        _react2.default.createElement(
          "div",
          { className: "col s6 m6 l6  authorArticle-timeStamp" },
          _react2.default.createElement(
            "h6",
            null,
            _react2.default.createElement(
              _reactMoment2.default,
              { fromNow: true },
              new Date(parseInt(createdAt))
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s6 m6 l6 xl6 authorArticle-category" },
          _react2.default.createElement(
            "h6",
            { className: "right-align" },
            category.toUpperCase()
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12 authorArticle-title" },
          _react2.default.createElement(
            "h5",
            null,
            title
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12 authorArticle-content" },
          _react2.default.createElement(
            "p",
            null,
            content[0].slice(0, 350)
          )
        )
      )
    );
  });
}

function AuthorArticles(_ref3) {
  var authorId = _ref3.match.params.authorId,
      history = _ref3.history;

  var _useQuery = (0, _reactHooks.useQuery)(_index.fetchAuthorArticles, {
    variables: {
      id: authorId
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 1),
      onMount = _useState2[0];

  // useEffect(() => {
  //   document.getElementById("authorArticlesRouteWrapper").style.width = "100%";
  // }, [onMount]);


  if (loading) {
    return _react2.default.createElement(
      "div",
      { id: "custom-loader" },
      _react2.default.createElement(
        "div",
        { "class": "progress" },
        _react2.default.createElement("div", { "class": "indeterminate" })
      )
    );
  }

  var articles = data.author.articles;

  return _react2.default.createElement(
    "div",
    { id: "authorArticlesRouteWrapper", className: "container" },
    _react2.default.createElement(
      "div",
      { className: "row" },
      renderArticles({ articles: articles, history: history })
    ),
    ";"
  );
}

exports.default = (0, _reactRouterDom.withRouter)(AuthorArticles);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _auth = __webpack_require__(8);

var _auth2 = __webpack_require__(7);

var _reactHooks = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Login(_ref) {
  var history = _ref.history;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useMutation = (0, _reactHooks.useMutation)(_auth.login),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateLogin = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  if (loading) {
    return _react2.default.createElement(
      "div",
      { "class": "progress" },
      _react2.default.createElement("div", { "class": "indeterminate" })
    );
  }

  if (data) {
    history.push("/");
  }

  var errors = [];

  if (error) {
    errors = error.graphQLErrors.map(function (error) {
      return error.message.slice(25, -2);
    });
  }

  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      { id: "loginFormWrapper", className: "row valign-center" },
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12", id: "auth-form-header" },
        _react2.default.createElement(
          "h5",
          { className: "center-align" },
          "Login to your Account"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12 auth-oauth-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "row " },
          _react2.default.createElement(
            "div",
            { className: "col s6 m6 l6" },
            _react2.default.createElement(
              "a",
              {
                id: "auth-oauth-google",
                className: "waves-effect waves-light btn oauth-btn",
                href: "/auth/google"
              },
              "Login with Google"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col s6 m6 l6 " },
            _react2.default.createElement(
              "a",
              {
                id: "auth-oauth-facebook",
                className: "waves-effect waves-light btn oauth-btn",
                href: "/auth/facebook"
              },
              "Login with Facebook"
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12" },
        _react2.default.createElement(
          "h6",
          { className: "center-align" },
          "Or"
        )
      ),
      _react2.default.createElement(
        "div",
        { id: "auth-form", className: "col s12 m12 l12" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "form",
            {
              onSubmit: function onSubmit(e) {
                e.preventDefault();
                mutateLogin({
                  variables: {
                    input: {
                      username: username,
                      password: password
                    }
                  },
                  refetchQueries: [{ query: _auth2.fetchCurrentUser }],
                  awaitRefetchQueries: true
                });
                setUsername("");
                setPassword("");
              },
              className: "col s12"
            },
            _react2.default.createElement(
              "div",
              { "class": "row" },
              _react2.default.createElement(
                "div",
                { "class": "input-field col s12" },
                _react2.default.createElement("input", {
                  onChange: function onChange(e) {
                    return setUsername(e.target.value);
                  },
                  id: "email",
                  type: "text",
                  "class": "validate",
                  value: username
                }),
                _react2.default.createElement(
                  "label",
                  { "for": "email" },
                  "Username"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "row" },
              _react2.default.createElement(
                "div",
                { "class": "input-field col s12" },
                _react2.default.createElement("input", {
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  },
                  id: "password",
                  type: "password",
                  "class": "validate",
                  value: password
                }),
                _react2.default.createElement(
                  "label",
                  { "for": "password" },
                  "Password"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "errors row" },
              errors.map(function (error) {
                return _react2.default.createElement(
                  "div",
                  { key: error, className: "authErrors col s12 m12 l12" },
                  error
                );
              })
            ),
            _react2.default.createElement(
              "button",
              {
                id: "auth-form-submit",
                className: "col s12 m12 l12 waves-effect waves-light btn"
              },
              "Login"
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "auth-form-link", className: "col s12 m12 l12 center-align" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/auth/signup" },
              "Don't have the account ? Signup"
            )
          )
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Login);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _auth = __webpack_require__(8);

var _auth2 = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Signup(_ref) {
  var history = _ref.history;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0, _react.useState)("READER"),
      _useState6 = _slicedToArray(_useState5, 1),
      badge = _useState6[0];

  var _useMutation = (0, _reactHooks.useMutation)(_auth.signup),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateSignup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  if (loading) {
    return _react2.default.createElement(
      "div",
      { "class": "progress" },
      _react2.default.createElement("div", { "class": "indeterminate" })
    );
  }

  if (data) {
    history.push("/");
  }

  var errors = [];

  if (error) {
    errors = error.graphQLErrors.map(function (error) {
      return error.message;
    });
  }
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      { id: "signupFormWrapper", className: "row valign-center" },
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12", id: "auth-form-header" },
        _react2.default.createElement(
          "h5",
          { className: "center-align" },
          "Signup to your Account"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12 auth-oauth-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "row " },
          _react2.default.createElement(
            "div",
            { className: "col s6 m6 l6" },
            _react2.default.createElement(
              "a",
              {
                id: "auth-oauth-google",
                className: "waves-effect waves-light btn oauth-btn",
                href: "/auth/google"
              },
              "Signup with Google"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col s6 m6 l6 " },
            _react2.default.createElement(
              "a",
              {
                id: "auth-oauth-facebook",
                className: "waves-effect waves-light btn oauth-btn",
                href: "/auth/facebook"
              },
              "Signup with Facebook"
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l12" },
        _react2.default.createElement(
          "h6",
          { className: "center-align" },
          "Or"
        )
      ),
      _react2.default.createElement(
        "div",
        { id: "auth-form", className: "col s12 m12 l12" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "form",
            {
              onSubmit: function onSubmit(e) {
                e.preventDefault();
                mutateSignup({
                  variables: {
                    input: {
                      username: username,
                      password: password,
                      badge: badge
                    }
                  },
                  refetchQueries: [{ query: _auth2.fetchCurrentUser }],
                  awaitRefetchQueries: true
                });
                setUsername("");
                setPassword("");
              },
              className: "col s12"
            },
            _react2.default.createElement(
              "div",
              { "class": "row" },
              _react2.default.createElement(
                "div",
                { "class": "input-field col s12" },
                _react2.default.createElement("input", {
                  onChange: function onChange(e) {
                    return setUsername(e.target.value);
                  },
                  id: "email",
                  type: "text",
                  "class": "validate",
                  value: username
                }),
                _react2.default.createElement(
                  "label",
                  { "for": "email" },
                  "Username"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "row" },
              _react2.default.createElement(
                "div",
                { "class": "input-field col s12" },
                _react2.default.createElement("input", {
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  },
                  id: "password",
                  type: "password",
                  "class": "validate",
                  value: password
                }),
                _react2.default.createElement(
                  "label",
                  { "for": "password" },
                  "Password"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "errors row" },
              errors.map(function (error) {
                return _react2.default.createElement(
                  "div",
                  { key: error, className: "authErrors col s12 m12 l12" },
                  error
                );
              })
            ),
            _react2.default.createElement(
              "button",
              {
                id: "auth-form-submit",
                className: "col s12 m12 l12 waves-effect waves-light btn"
              },
              "Signup"
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "auth-form-link", className: "col s12 m12 l12 center-align" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/auth/login" },
              "Already have a account ? Login"
            )
          )
        )
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Signup);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _auth = __webpack_require__(8);

var _auth2 = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logout(_ref) {
  var history = _ref.history;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 1),
      onMount = _useState2[0];

  var _useMutation = (0, _reactHooks.useMutation)(_auth.logout),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateLogout = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      logoutMutationResponse = _useMutation2$.data,
      logoutMutationLoading = _useMutation2$.loading,
      logoutMutationError = _useMutation2$.error;

  (0, _react.useEffect)(function () {
    mutateLogout({
      awaitRefetchQueries: true,
      refetchQueries: [{
        query: _auth2.fetchCurrentUser
      }]
    });
  }, [onMount]);

  if (logoutMutationResponse) {
    history.replace("/");
  }

  if (logoutMutationLoading) {
    return _react2.default.createElement(
      "div",
      { "class": "progress" },
      _react2.default.createElement("div", { "class": "indeterminate" })
    );
  }

  return _react2.default.createElement(
    "div",
    { "class": "progress" },
    _react2.default.createElement("div", { "class": "indeterminate" })
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Logout);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Search = __webpack_require__(48);

var _Search2 = _interopRequireDefault(_Search);

var _form = __webpack_require__(50);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function closeTab(_ref) {
  var history = _ref.history;

  history.go(-1);
}

function ReplaceArticle(_ref2) {
  var history = _ref2.history;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 1),
      onMount = _useState2[0];

  (0, _react.useEffect)(function () {
    document.querySelector("#manageTempleteWrapper").style.transform = " translateX(0)";
  }, [onMount]);

  return _react2.default.createElement(
    "div",
    { id: "manageTempleteWrapper", className: "row" },
    _react2.default.createElement(
      "div",
      { className: "row" },
      _react2.default.createElement(
        "div",
        {
          id: "replaceArtile-TopButtons",
          className: "col s12 m12 l12 right-align"
        },
        _react2.default.createElement(
          "button",
          { onClick: function onClick() {
              return closeTab({ history: history });
            } },
          "X"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l9" },
        _react2.default.createElement(_Search2.default, null)
      ),
      _react2.default.createElement(
        "div",
        { className: "col s12 m12 l3" },
        _react2.default.createElement(_form2.default, null)
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(ReplaceArticle);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _searchArticles = __webpack_require__(49);

var _reactMoment = __webpack_require__(5);

var _reactMoment2 = _interopRequireDefault(_reactMoment);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openArticle(_ref) {
  var articleId = _ref.articleId,
      history = _ref.history;

  // history.push(`/article/${articleId}`);
  window.open(this.makeHref("localhost:3100/article/" + articleId));
}

function handleSearch(e, querySearchArticles, _ref2) {
  var query = _ref2.query,
      searchType = _ref2.searchType,
      pageNum = _ref2.pageNum,
      sortOpts = _ref2.sortOpts;

  e.preventDefault();
  querySearchArticles({
    variables: {
      input: {
        query: query,
        searchType: searchType,
        pageNum: pageNum,
        sortOpts: sortOpts
      }
    }
  });
}

function renderArticles(_ref3) {
  var articles = _ref3.articles,
      history = _ref3.history;

  return articles.map(function (article) {
    var articleId = article.id,
        title = article.title,
        content = article.content,
        createdAt = article.createdAt,
        category = article.category;

    return _react2.default.createElement(
      "div",
      {
        style: { cursor: "default" },
        className: "col s12 m12 l12 xl12 authorArticleWrapper"
      },
      _react2.default.createElement(
        "div",
        { className: "row authorArticle" },
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12" },
          _react2.default.createElement(
            "div",
            { className: "row " },
            _react2.default.createElement(
              "div",
              { className: "col s4 left-align", style: { padding: "4px" } },
              _react2.default.createElement("input", {
                id: "" + articleId,
                type: "text",
                value: articleId
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col s2 left-align", style: { padding: "4px" } },
              _react2.default.createElement(
                "i",
                {
                  onClick: function onClick(e) {
                    var copyText = document.getElementById("" + articleId);
                    /* Select the text field */
                    copyText.select();
                    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                    /* Copy the text inside the text field */
                    document.execCommand("copy");
                  },
                  "class": "material-icons"
                },
                "content_copy"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col s6 right-align", style: { padding: "4px" } },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/article/" + articleId, target: "_blank" },
                _react2.default.createElement(
                  "i",
                  { "class": "material-icons" },
                  "open_in_new"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s6 m6 l6  authorArticle-timeStamp" },
          _react2.default.createElement(
            "h6",
            null,
            _react2.default.createElement(
              _reactMoment2.default,
              { fromNow: true },
              new Date(parseInt(createdAt))
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s6 m6 l6 xl6 authorArticle-category" },
          _react2.default.createElement(
            "h6",
            { className: "right-align" },
            category.toUpperCase()
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12 authorArticle-title" },
          _react2.default.createElement(
            "h5",
            null,
            title
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s12 m12 l12 xl12 authorArticle-content" },
          _react2.default.createElement(
            "p",
            null,
            content[0].slice(0, 350)
          )
        )
      )
    );
  });
}

function Search(_ref4) {
  var history = _ref4.history;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 1),
      onMount = _useState2[0];

  (0, _react.useEffect)(function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, [onMount]);

  var _useLazyQuery = (0, _reactHooks.useLazyQuery)(_searchArticles.searchArticles),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      querySearchArticles = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = (0, _react.useState)("byTitle"),
      _useState6 = _slicedToArray(_useState5, 2),
      searchType = _useState6[0],
      setSearchType = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      pageNum = _useState8[0],
      setPageNum = _useState8[1];

  var _useState9 = (0, _react.useState)("createdAt"),
      _useState10 = _slicedToArray(_useState9, 2),
      sortField = _useState10[0],
      setSortField = _useState10[1];

  var _useState11 = (0, _react.useState)("Desc"),
      _useState12 = _slicedToArray(_useState11, 2),
      sortOrder = _useState12[0],
      setSortOrder = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      inCategories = _useState14[0],
      setInCategories = _useState14[1];

  var articles = [];

  if (data) {
    console.log(data, "lazyData");
    articles = data.searchArticles;
  }

  return _react2.default.createElement(
    "div",
    { className: "row col s12" },
    _react2.default.createElement(
      "div",
      { className: "col s12" },
      _react2.default.createElement(
        "h5",
        null,
        "Search Articles"
      ),
      _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          "div",
          { "class": "nav-wrapper" },
          _react2.default.createElement(
            "form",
            {
              className: "",
              onSubmit: function onSubmit(e) {
                handleSearch(e, querySearchArticles, {
                  query: query,
                  searchType: searchType,
                  pageNum: pageNum,
                  sortOpts: {
                    sortField: sortField,
                    sortOrder: sortOrder
                  },
                  inCategories: inCategories
                });
              }
            },
            _react2.default.createElement(
              "div",
              { "class": "input-field" },
              _react2.default.createElement("input", {
                onChange: function onChange(e) {
                  return setQuery(e.target.value);
                },
                value: query,
                id: "search",
                type: "search",
                required: true
              }),
              _react2.default.createElement(
                "label",
                { "class": "label-icon", "for": "search" },
                _react2.default.createElement(
                  "i",
                  { "class": "material-icons" },
                  "search"
                )
              ),
              _react2.default.createElement(
                "i",
                { "class": "material-icons" },
                "close"
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col s4" },
          _react2.default.createElement(
            "div",
            { "class": "input-field col s12" },
            _react2.default.createElement(
              "select",
              {
                onChange: function onChange(e) {
                  setSearchType(e.target.value);
                }
              },
              _react2.default.createElement(
                "option",
                { value: "", disabled: true, selected: true },
                "Search By"
              ),
              _react2.default.createElement(
                "option",
                { value: "byTitle" },
                "By Title"
              ),
              _react2.default.createElement(
                "option",
                { value: "byAuthor" },
                "By Author"
              )
            ),
            _react2.default.createElement(
              "label",
              null,
              "Search By"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s4" },
          _react2.default.createElement(
            "div",
            { "class": "input-field col s12" },
            _react2.default.createElement(
              "select",
              {
                onChange: function onChange(e) {
                  var instance = M.FormSelect.getInstance(e.target);
                  setInCategories(instance.getSelectedValues());
                },
                multiple: true
              },
              _react2.default.createElement(
                "option",
                { value: "", disabled: true, selected: true },
                "Select Categories"
              ),
              _react2.default.createElement(
                "option",
                { value: "International" },
                "International"
              ),
              _react2.default.createElement(
                "option",
                { value: "US" },
                "US"
              ),
              _react2.default.createElement(
                "option",
                { value: "Politics" },
                "Politics"
              ),
              _react2.default.createElement(
                "option",
                { value: "Health" },
                "Health"
              ),
              _react2.default.createElement(
                "option",
                { value: "Technology" },
                "Technology"
              ),
              _react2.default.createElement(
                "option",
                { value: "Sports" },
                "Sports"
              ),
              _react2.default.createElement(
                "option",
                { value: "Opinion" },
                "Opinion"
              )
            ),
            _react2.default.createElement(
              "label",
              null,
              "Search in Categories"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s2" },
          _react2.default.createElement(
            "div",
            { "class": "input-field col s12" },
            _react2.default.createElement(
              "select",
              {
                onChange: function onChange(e) {
                  setSortField(e.target.value);
                }
              },
              _react2.default.createElement(
                "option",
                { value: "", disabled: true, selected: true },
                "Sort Field"
              ),
              _react2.default.createElement(
                "option",
                { value: "createdAt" },
                "Created At"
              ),
              _react2.default.createElement(
                "option",
                { value: "likes" },
                "Likes"
              )
            ),
            _react2.default.createElement(
              "label",
              null,
              "Sort Field"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col s2" },
          _react2.default.createElement(
            "div",
            { "class": "input-field col s12" },
            _react2.default.createElement(
              "select",
              {
                onChange: function onChange(e) {
                  setSortOrder(e.target.value);
                }
              },
              _react2.default.createElement(
                "option",
                { value: "", disabled: true, selected: true },
                "Select Order"
              ),
              _react2.default.createElement(
                "option",
                { value: "Desc" },
                "Desc"
              ),
              _react2.default.createElement(
                "option",
                { value: "Asc" },
                "Asc"
              )
            ),
            _react2.default.createElement(
              "label",
              null,
              "Sort Order"
            )
          )
        )
      ),
      loading ? _react2.default.createElement(
        "div",
        { "class": "preloader-wrapper active" },
        _react2.default.createElement(
          "div",
          { "class": "spinner-layer spinner-red-only" },
          _react2.default.createElement(
            "div",
            { "class": "circle-clipper left" },
            _react2.default.createElement("div", { "class": "circle" })
          ),
          _react2.default.createElement(
            "div",
            { "class": "gap-patch" },
            _react2.default.createElement("div", { "class": "circle" })
          ),
          _react2.default.createElement(
            "div",
            { "class": "circle-clipper right" },
            _react2.default.createElement("div", { "class": "circle" })
          )
        )
      ) : _react2.default.createElement(
        "div",
        { className: "row" },
        renderArticles({ articles: articles, history: history })
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Search);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    query searchArticles($input: searchArticlesInputType) {\n      searchArticles(input: $input) {\n        id\n        title\n        authorId {\n          id\n          username\n          profileImg\n        }\n        createdAt\n        comments {\n          id\n        }\n        likes {\n          id\n        }\n        category\n        content\n      }\n    }\n  "], ["\n    query searchArticles($input: searchArticlesInputType) {\n      searchArticles(input: $input) {\n        id\n        title\n        authorId {\n          id\n          username\n          profileImg\n        }\n        createdAt\n        comments {\n          id\n        }\n        likes {\n          id\n        }\n        category\n        content\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  searchArticles: (0, _graphqlTag2.default)(_templateObject)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHooks = __webpack_require__(2);

var _articleReplace = __webpack_require__(51);

var _mainPage = __webpack_require__(10);

var _categoryPage = __webpack_require__(11);

var _queryString = __webpack_require__(52);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleFormSubmit(_ref) {
  var history = _ref.history,
      _ref$data = _ref.data,
      articleId = _ref$data.articleId,
      section = _ref$data.section,
      indexInSection = _ref$data.indexInSection,
      pageT = _ref$data.pageT,
      refetchQueries = _ref$data.refetchQueries,
      mutateSetMainSection = _ref.mutateSetMainSection,
      mutateSetCategorySection = _ref.mutateSetCategorySection;

  if (pageT === "main") {
    var refetchQuery = void 0;
    if (refetchQueries === "fetchHeadlines") refetchQuery = _mainPage.fetchHeadlines;else refetchQuery = _mainPage.fetchEditorsPick;
    mutateSetMainSection({
      variables: {
        input: {
          articleId: articleId,
          section: section,
          indexInSection: indexInSection ? parseInt(indexInSection) : 0
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [{
        query: refetchQuery
      }]
    });
  } else {
    // other validations will be done later; like article Category check type
    mutateSetCategorySection({
      variables: {
        input: {
          articleId: articleId,
          section: section,
          name: pageT
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [{
        query: _categoryPage.fetchCategoryTemplete,
        variables: {
          input: {
            name: pageT
          }
        }
      }]
    });
  }
}

function Form(_ref2) {
  var history = _ref2.history;

  var _queryString$parse = _queryString2.default.parse(history.location.search),
      pageT = _queryString$parse.pageT,
      section = _queryString$parse.section,
      indexInSection = _queryString$parse.indexInSection,
      refetchQueries = _queryString$parse.refetchQueries;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      articleId = _useState2[0],
      setArticleId = _useState2[1];

  var _useMutation = (0, _reactHooks.useMutation)(_articleReplace.setMainSection),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutateSetMainSection = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var _useMutation3 = (0, _reactHooks.useMutation)(_articleReplace.setCategorySection),
      _useMutation4 = _slicedToArray(_useMutation3, 2),
      mutateSetCategorySection = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      setCatData = _useMutation4$.data,
      setCatLoading = _useMutation4$.loading,
      setCatError = _useMutation4$.error;

  return _react2.default.createElement(
    "form",
    {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        handleFormSubmit({
          history: history,
          data: { articleId: articleId, section: section, pageT: pageT, indexInSection: indexInSection, refetchQueries: refetchQueries },
          mutateSetMainSection: mutateSetMainSection,
          mutateSetCategorySection: mutateSetCategorySection
        });
      },
      style: { padding: "10px" },
      className: "row col s12"
    },
    _react2.default.createElement(
      "div",
      { className: "input-field col s12" },
      _react2.default.createElement(
        "h5",
        null,
        "Replace Article"
      )
    ),
    _react2.default.createElement(
      "div",
      { "class": "input-field col s12" },
      _react2.default.createElement("input", {
        id: "first_name",
        type: "text",
        "class": "validate",
        value: articleId,
        onChange: function onChange(e) {
          return setArticleId(e.target.value);
        }
      }),
      _react2.default.createElement(
        "label",
        { "for": "first_name" },
        "Article Id"
      )
    ),
    _react2.default.createElement(
      "div",
      { "class": "input-field col s12 right-align" },
      _react2.default.createElement(
        "button",
        { className: "waves-effect waves-light btn" },
        "Submit"
      )
    )
  );
}

exports.default = (0, _reactRouterDom.withRouter)(Form);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n    mutation setMainSection($input: setMainSectionInputType) {\n      setMainSection(input: $input) {\n        headline1 {\n          id\n          title\n        }\n        headline2 {\n          id\n          title\n        }\n        headline3 {\n          id\n          title\n        }\n        headline4 {\n          id\n          title\n        }\n        headline5 {\n          id\n          title\n        }\n        editorsPick {\n          id\n          title\n        }\n      }\n    }\n  "], ["\n    mutation setMainSection($input: setMainSectionInputType) {\n      setMainSection(input: $input) {\n        headline1 {\n          id\n          title\n        }\n        headline2 {\n          id\n          title\n        }\n        headline3 {\n          id\n          title\n        }\n        headline4 {\n          id\n          title\n        }\n        headline5 {\n          id\n          title\n        }\n        editorsPick {\n          id\n          title\n        }\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    mutation setCategorySection($input: setCategorySectionInputType) {\n      setCategorySection(input: $input) {\n        headline1 {\n          title\n        }\n        headline2 {\n          title\n        }\n        headline3 {\n          title\n        }\n      }\n    }\n  "], ["\n    mutation setCategorySection($input: setCategorySectionInputType) {\n      setCategorySection(input: $input) {\n        headline1 {\n          title\n        }\n        headline2 {\n          title\n        }\n        headline3 {\n          title\n        }\n      }\n    }\n  "]);

var _graphqlTag = __webpack_require__(3);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = {
  setMainSection: (0, _graphqlTag2.default)(_templateObject),
  setCategorySection: (0, _graphqlTag2.default)(_templateObject2)
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ })
/******/ ]);