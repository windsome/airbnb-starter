var webpack = require('webpack')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)

//var isDev = false;
var isDev = true;
if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config[0].output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
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

