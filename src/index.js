import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
// apollo SSR imports
import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
// end apollo imports
import { StaticRouter } from "react-router";
import { InMemoryCache } from "apollo-cache-inmemory";
import Layout from "./helpers/Layout";
import { getDataFromTree } from "@apollo/react-ssr";

function Html({ content, state, DOMAIN }) {
  return (
    <html>
      <head>
        <title>Inside L.A</title>

        <base href={DOMAIN} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Jomolhari&display=swap"
          rel="stylesheet"
        />

        <link
          type="text/css"
          rel="stylesheet"
          href="css/materialize.min.css"
          media="screen,projection"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="css/custom.css"
          media="screen,projection"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              "\\u003c"
            )};`
          }}
        />
        <script type="text/javascript" src="js/materialize.min.js"></script>
        <script src="main.bundle.js"></script>
      </body>
    </html>
  );
}

// import proxy from 'express-http-proxy';
const app = express();

// app.use('/graphql',
//     proxy('http://localhost:4000/graphql')
// )

app.use(express.static("public"));

// setting enviroment variables ;
const PORT = process.env.PORT || 3100;
const DOMAIN = process.env.DOMAIN || `http://localhost:${PORT}/`;

app.use((req, res) => {
  // ssr
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie: req.header("Cookie")
      },
      fetch
    }),
    cache: new InMemoryCache()
  });

  const context = {};

  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
    </ApolloProvider>
  );

  // rendering code
  getDataFromTree(App).then(() => {
    // We are ready to render for real
    const content = renderToString(App);
    const initialState = client.extract();

    const html = (
      <Html content={content} state={initialState} DOMAIN={DOMAIN} />
    );

    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
