var webpack = require('webpack')
var config = require('./webpack.config.prod')
var path = require('path')
var ReactDOM = require('react-dom/server')

var ServerApp = require('../dist/assets/bundle.server');

var port = 3001
var compiler = webpack(config)
var express = require('express')
var app = express()


app.use(express.static(path.join(__dirname, "..", "dist")));

app.use('*', function(req, res) {
  console.info("req:"+req.url);
  ServerApp(req, res);
  //res.sendFile(__dirname + '/app/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

