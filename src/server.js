import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './components/HelloWorld';
import express from 'express';

let app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// GET /
app.get('/', function (req, res) {
  res.render('layout', {
    content: ReactDOMServer.renderToString(<HelloWorld />)
  });
});

// Start server
let server = app.listen(1337, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});
