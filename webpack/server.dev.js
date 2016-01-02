var webpack = require('webpack')
var config = require('./webpack.config.dev')
var path = require('path')

var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/", function(req, res) {
  console.info("req:"+req.url);
  res.sendFile(path.join(__dirname, "..", "app/index.html"))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

