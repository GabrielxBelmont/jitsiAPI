import 'styles/style.css'

const http = require('http');
const path = require('path');
const express = require('express');
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.render('page');
})
app.get('/client', (req, res) => {
  res.sendFile(__dirname + '/client.html');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url) {
    fs.readFile(
      path.join(__dirname, "page.html"),
      (err, content) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf8");
      }
    );
  }
});
*/

/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/