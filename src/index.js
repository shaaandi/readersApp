import express from "express";
// import proxy from 'express-http-proxy';
const app = express();

// app.use('/graphql',
//     proxy('http://localhost:4000/graphql')
// )

app.use(express.static("public"), (req, res, next) => {
  console.log("Not Found");
  console.log(req.path);
  next();
});

// setting enviroment variables ;
const PORT = process.env.PORT || 3100;
const DOMAIN = process.env.DOMAIN || `http://localhost:${PORT}/`;

app.get("*", (req, res) => {
  res.send(
    `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Gt. Times</title>
            <!--Import Google Icon Font-->
             <base href=${DOMAIN}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Jomolhari&display=swap" rel="stylesheet">
            <!--Import materialize.css-->
            <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
            <link type="text/css" rel="stylesheet" href="css/custom.css"  media="screen,projection"/>
            <!--Let browser know website is optimized for mobile-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        <div id="root"></div>
        <script type="text/javascript" src="js/materialize.min.js"></script>
        <script src="main.bundle.js" ></script>
        </body>
        </html>

        `
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
