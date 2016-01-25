var http = require('http');

var getHeader = function (req) {
  var ret = {};
  for (var i in req.headers) {
    if (!/host|connections/i.test(i)) {
      ret[i]= req.headers[i];
    }
  }
  return ret;
}
exports.onProxy = function (req, res) {
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
