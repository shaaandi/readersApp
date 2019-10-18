import express from "express";
// import proxy from 'express-http-proxy';
const app = express();

// app.use('/graphql',
//     proxy('http://localhost:4000/graphql')
// )

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(
    `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Apollo Client App</title>
        </head>
        <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
        </body>
        </html>

        `
  );
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
