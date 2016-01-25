require('es6-promise').polyfill();
require('isomorphic-fetch');
//import fetch from 'isomorphic-fetch'
var http = require('http');

exports.index = function (req, res) {
    res.render('index', {name:'index'});
}

exports.getCorsResource = function (req, res) {
    console.log ("req.params="+JSON.stringify(req.params));
    console.log ("req.query="+JSON.stringify(req.query));
    console.log ("req.body="+JSON.stringify(req.body));

    var word = req.query.word || req.body.word;
    var cg = req.query.cg || req.body.cg;
    var error = req.query.error || req.body.error;
    console.log ("word="+word+", cg="+cg+", error="+error);

    var url = `http://image.baidu.com/search/avatarjson?tn=resultjsonavatarnew&ie=utf-8&word=${word}`;
    if (error)
        url = `http://image.baidu1.com/badurl?word=${word}`;
    console.log("fetch url:"+url);

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log("server fetch ok!");
            //console.log("baidu:"+JSON.stringify(json));
            res.jsonp(json);
        }).catch(err => {
            console.log ("err="+JSON.stringify(err));
            res.jsonp(err);
        })

    console.log ("after getCorsResource!");

    /*var imgs = {name:"aaa", imgs:[{objURL:"/1"}, {objURL:"/2"}]};
    //res.render('getCorsResource', {name:'getCorsResource'});
    console.log (imgs);
    res.jsonp(imgs);*/
}

exports.getApis = function (req, res) {
  var url = req.baseUrl+req.url;
  var options = {
    host:'localhost',
    port:5000,
    path:url,
    method:req.method
  };
  console.log ("url="+url);
  var req2 = http.request(options, function(req2, res2) {
    if (res2) res2.pipe(res);
    console.log(req2.url);
  }).end();
}

var getHeader = function (req) {
  var ret = {};
  for (var i in req.headers) {
    if (!/host|connections/i.test(i)) {
      ret[i]= req.headers[i];
    }
  }
  return ret;
}
//exports.onProxy = function (req, res) {
exports.getApis = function (req, res) {
  var url = req.baseUrl+req.url;
  var opt = {
    host: 'localhost',
    port:5000,
    path: url,
    method: req.method,
    headers: getHeader(req)
  };
  console.log ("proxy: method="+req.method+", url="+url);
  var req2 = http.request(opt, function(res2) {
    res.writeHead(res2.statusCode, res2.headers);
    res2.pipe(res);
    res2.on('end', function() {
      console.log ('success');
    });
  });
  if (/POST|PUT/i.test(req.method)){
    req.pipe(req2);
  } else {
    req2.end();
  }
  req2.on('error', function (err) {
    console.log ("error="+err.stack);
    res.end(err.stack);
  });
}
