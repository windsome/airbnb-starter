require('es6-promise').polyfill();
require('isomorphic-fetch');
//import fetch from 'isomorphic-fetch'

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

