import 'babel-core/polyfill'

import webpack from 'webpack';
import config from './webpack.config';
import path from 'path';
import { renderToString } from 'react-dom/server';
 

import express from 'express';
const app = express();
const port = 3000
const compiler = webpack(config)

let isDev = false;
//var isDev = true;
if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config[0].output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(path.join(__dirname, "dist")));
}


app.use(function(req, res) {
  console.info("req:"+req.url);
  res.sendFile(__dirname + '/app/index.html')
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

