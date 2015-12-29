var React = require('react');
//var $=require('jquery');
//var jQuery = $;
//require('./3rdparty/jquery.i18n.properties');
var HeaderBig = require('../../components/HeaderBig.react.js');
var SearchBox = require('../../components/SearchBox.react.js');
var CarouselPicture = require('../../components/CarouselPicture.react.js');
var InstantBookPanel = require('../../components/InstantBookPanel.react.js');
var PagingResult = require('../../components/PagingResult.react.js');

var baseImgUrl = '/static/images/';
var data=JSON.stringify({id:1,desc:'desc',gourl:'abc',items:[{id:100,desc:'100',imgurl:baseImgUrl+'0.jpg',gourl:'/0'},{id:101,desc:'101',imgurl:baseImgUrl+'1.jpg',gourl:'/1'},{id:102,desc:'102',imgurl:baseImgUrl+'2.jpg',gourl:'/2'}]});

var MapSearchList = React.createClass({
  render: function() {
    return (
        <main id="site-content" role="main">
          <div className="map-search">
            <div> <span>{"this the list page!"}</span></div>
            <div className="sidebar">
              <SearchBox />
              <div id="leftList" className="list-container">
                <div className="listItem"><CarouselPicture data={data} dataUserPhotoUrl={baseImgUrl+"beauty/1.jpg"}/></div>
                <div className="listItem"><CarouselPicture current={1} data={data} dataUserPhotoUrl={baseImgUrl+"beauty/2.jpg"}/></div>
                <div className="listItem"><CarouselPicture current={2} data={data} dataUserPhotoUrl={baseImgUrl+"beauty/3.jpg"}/></div>
                <div className="listItem"><CarouselPicture current={2} data={data} dataUserPhotoUrl={baseImgUrl+"beauty/4.jpg"}/></div>
                <div className="listItem"><CarouselPicture current={2} data={data} dataUserPhotoUrl={baseImgUrl+"beauty/5.jpg"}/></div>
                <div className="listItem"><CarouselPicture current={2} data={data} dataUserPhotoUrl={baseImgUrl+"beauty/6.jpg"}/></div>
                <div><PagingResult total={30} pageSize={12} /></div>
              </div>
            </div>
            <div id="rightMap" className="map hide-sm">
            </div>
          </div>
          <InstantBookPanel aria-hidden={false} ariaHidden={true}/>
        </main>
    );    
  }
});

module.exports = MapSearchList;

