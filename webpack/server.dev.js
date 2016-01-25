//require('babel-core/register')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var path = require('path')
var apis = require('../bpi')

var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)

var bodyParser = require('body-parser');
app.use(bodyParser());

//app.set('view engine', 'ejs');
app.use('/apis/cors', apis.getCorsResource);
//app.post('/apis/cors', apis.getCorsResource);
app.use('/apis', apis.getApis);
/*app.get('/apis/cors',function(req,res,next){
    res.jsonp({status:'json'});  
});*/  

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

