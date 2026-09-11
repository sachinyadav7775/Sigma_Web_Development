// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello sky khushi</h1>'); 
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, c, d, e} from "./myModule.js"
// console.log(a,b,c,d,e)

// import sk from "./myModule.js"
// console.log(sk)

const a = require("./myModule2")

console.log(a, __dirname, __filename)