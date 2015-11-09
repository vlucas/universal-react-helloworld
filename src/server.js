import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './components/HelloWorld';
import express from 'express';

let app = express();

app.get('/', function (req, res) {
  res.send(
    ReactDOMServer.renderToString(<HelloWorld />)
  );
});

let server = app.listen(1337, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});
