const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs")
// app.use(express.static("public"))

// Middlewares 1
app.use((req, res, next) => {
  fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method} \n`)
  next()
})

// Middlewares 2
app.use((req, res, next) => {
  console.log('b')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World sky!');
});

app.get('/about', (req, res) => {
  res.send('about us sky!');
});

app.get('/contact', (req, res) => {
  res.send('contact sky!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});