require('es6-promise').polyfill();
require('isomorphic-fetch');
//import fetch from 'isomorphic-fetch'

function getFaverateHouses (req) {
  var word = req.query.word || req.body.word;
  var cg = req.query.cg || req.body.cg;
  var error = req.query.error || req.body.error;
  console.log ("word="+word+", cg="+cg+", error="+error);
  var house = {
    id:1,
    name:'D.Loft 3 - Modern Conrtyard House',
    description:'Entire home/apt.',
    price:1781,
    avatar:'http://a.com/a.jpg',
    starRating:105
  };
  var list = {
    ids:[1, 2, 3, 4],
    totalCount:105,
    start:0,
    len:4,
    entries:{
      houses: {
        1:house,
        2:house,
        3:house,
        4:house
      }
    }
  };
  return list;
}

function initHouses() {
  var house = {
    id:1,
    name:'D.Loft 3 - Modern Conrtyard House',
    description:'Entire home/apt.',
    price:1781,
    avatar:'http://a.com/a.jpg',
    starRating:105
  };
  var list = [];
  for (var i = 0; i < 11; i++) {
    var house1 = Object.assign({}, house, {id:i+1});
    list[i] = house1;
  }
  return list;
}

function getFaverateHouses2 (req, res) {
  var houseList = initHouses();
  var word = req.query.word || req.body.word || 'house';
  var url = `http://image.baidu.com/search/avatarjson?tn=resultjsonavatarnew&ie=utf-8&word=${word}`;
  fetch(url).then(response => response.json())
    .then(json => {
      var imgdata = Object.assign({}, json);
      console.log("server fetch ok! getFaverateHouses2!");
      //console.log("server fetch ok! json="+JSON.stringify(imgdata));
      var imgs = imgdata.imgs;
      if (imgs != null && imgs.length > 0) {
        for (var i = 0; i< houseList.length; i++) {
          var rand = parseInt(Math.random() * (imgs.length-1));
          var count = imgs.length - rand;
          houseList[i].imgs = [];
          for (var j = 0; j < count; j++) {
            houseList[i].imgs[j] = imgs[rand+j].objURL;
          }
        }
      }
      res.jsonp(houseList);
    }).catch(err => {
      console.log ("err="+JSON.stringify(err));
      res.jsonp(err);
    })
}


exports.getApiResult = function (req, res) {
  console.log ("request fullurl:"+ req.baseUrl + req.url+", url="+req.url);
  console.log ("req.params="+JSON.stringify(req.params));
  console.log ("req.query="+JSON.stringify(req.query));
  console.log ("req.body="+JSON.stringify(req.body));
  var url = req.url;
  var result = "";
  switch (url) {
    case '/faverate':
      getFaverateHouses2(req, res);
      break;
    default:
      result = "";
      res.jsonp(result);
      break;
  }
  console.log ("after getApiResult:"+result);

}

