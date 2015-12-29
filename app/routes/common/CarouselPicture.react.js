/**
 * <CarouselPicture loadone=true showdesc=false current=0 data='{id:1,desc:'desc',gourl='abc',items:[{id:100,desc:'100',imgurl:'/res/0.jpg',gourl:'/0'},{id:101,desc:'101',imgurl:'/res/1.jpg',gourl:'/1'},{id:102,desc:'102',imgurl:'/res/2.jpg',gourl:'/2'}]}'/>
 *
 */
var React = require('react');
var classNames = require('classnames');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FitImage = React.createClass({
  // parameters: <FitImage show=true/false src="/where/is/picture" />
  getDefaultProps: function() {
    return {
      show:false
    };
  },
  render: function() {
    //var show = true;
    //if(typeof(this.props.show) != "undefined") show = Boolean(this.props.show);

    return (
      <div className={classNames({'carousel-wind-image-wrapper-outter':true,'common-display-none':!this.props.show})}>
        <div className="carousel-wind-image-wrapper-inner media-cover">
          <img src={this.props.src} className="carousel-wind-image" />
        </div>
      </div>
    );
  }
});

var HeartImage = React.createClass({
  // parameters: <HeartImage dataRed=true/false/>
  getDefaultProps: function() {
    return {
      dataRed:false
    };
  },
  render: function() {
    var iconRedOrNot;
    if (this.props.dataRed) {
      iconRedOrNot = <i className="icon icon-heart icon-rausch icon-size-2 heart-button-icon"></i>;
    } else {
      iconRedOrNot = <i className="icon icon-heart icon-size-2 heart-button-icon heart-button-icon-unchecked"></i>;
    }

    return (
      <label className="heart-button-wrapper">
        <span className="screen-reader-only">heart list</span>
        {iconRedOrNot}
        <i className="icon icon-heart-alt icon-white icon-size-2 heart-button-icon"></i>
      </label>
    );
  }
});

var SellerPhotoShortCut = React.createClass({
  render: function() {
    return (
      <div className="media-photo media-round">
        <img src={this.props.src} />
      </div>
    );
  }
});

var PriceTip = React.createClass({
  //<PriceTip dataUnit="￥/$" dataPrice="254" dataFlush=true/false dataUrl="/price/url" />
  getDefaultProps: function() {
    return {
      dataUnit:'$',
      dataPrice:0,
      dataFlush:true
    };
  },
  getInitialState: function() {
    return {showpanel:false};
  },
  mouseOver: function() {
    this.setState({showpanel:true});
  },
  mouseOut: function() {
    this.setState({showpanel:false});
  },
  render: function() {
    /*var unit = "$", price = 0, flush = false;
    if(typeof(this.props.dataUnit) != "undefined") unit = String(this.props.dataUnit);
    if(typeof(this.props.dataPrice) != "undefined") price = Number(this.props.dataPrice);
    if(typeof(this.props.dataFlush) != "undefined") flush = Boolean(this.props.dataFlush);*/

    var flushItem;
    if (this.props.dataFlush) {
      flushItem = <span className="h3 icon-beach"><i className="icon icon-instant-book icon-flush-sides" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></i></span>;
    }
    return (
          <div>
            <sup className="h6 text-contrast">{this.props.dataUnit}</sup>
            <span className="h3 text-contrast price-amount">{this.props.dataPrice}</span>
            <sup className="h6 text-contrast"></sup>
            {flushItem}
          </div>
    );
  }
});

var CarouselPicture = React.createClass({
  getDefaultProps: function() {
    return {
      loadone:true,
      current:0,
      showdesc:false
    };
  },

  /*getInitialState: function() {
    this.data = JSON.parse(this.props.data);
    var loadone = true, current = 0, showdesc = false;
    if(typeof(this.props.loadone) != "undefined")  loadone  = Boolean(this.props.loadone);
    if(typeof(this.props.current) != "undefined")  current  = Number(this.props.current);
    if(typeof(this.props.showdesc) != "undefined") showdesc = Boolean(this.props.showdesc);
    if (current >= this.data.items.length || current < 0) current = 0;
    //console.log("loadone="+loadone+"["+typeof(loadone)+"],current="+current+"["+typeof(current)+"],showdesc="+showdesc+"["+typeof(showdesc)+"]");
    //return {loadone:true,current:0,showdesc:false};
    return {
      loadone:loadone,
      current:current,
      showdesc:showdesc
    };
  },*/

  getInitialState: function() {
    this.data = JSON.parse(this.props.data);
    return {
      loadone:this.props.loadone,
      current:this.props.current,
      showdesc:this.props.showdesc
    };
  },

  componentDidMount: function() {
    //TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    //TodoStore.removeChangeListener(this._onChange);
  },

  prevItem: function() {
    //var data = this.props.data;
    var itemcount = this.data.items.length;
    //var itemcount = this.props.data.items.length;
    if (itemcount == 0) {
      //nothing to do.
      return;
    }
    var current1 = this.state.current - 1;
    if (current1 < 0) current1 = itemcount - 1;
    this.setState({current:current1, loadone:false});
  },

  nextItem: function() {
    var itemcount = this.data.items.length;
    if (itemcount == 0) {
      //nothing to do.
      return;
    }
    var current1 = this.state.current + 1;
    if (current1 >= itemcount) current1 = 0;
    this.setState({current:current1, loadone:false});
  },

  getImageItems: function() {
    if (this.state.loadone) {
      if ((this.state.current >= 0) && (this.state.current < this.data.items.length)) {
        var imgurl = this.data.items[this.state.current].imgurl;
        return (<FitImage src={imgurl} show={true} />);
      } else {
        console.log("current="+this.state.current+" out of array index, array length="+this.data.items.length);
      }
    } else {
      var imgItems = this.data.items.map(function(item, index){
        if(item.imgurl) {
          if (this.state.current == index) 
            return (<FitImage src={item.imgurl} key={index} show={true} />);
          else
            //return (<FitImage src={item.imgurl} key={index} show={false} />);
            return (<FitImage src={item.imgurl} key={index} />);
        } else {
          console.log ("index="+index+", imgurl is null!");
        }
        return;
      }.bind(this));
      return imgItems;
    }
    return ;
  },
  getCurrentGoUrl: function() {
    var gourl = this.data.gourl;
    if (this.state.current >= 0 && this.state.current < this.data.items.length) {
      gourl = this.data.items[this.state.current].gourl;
    }
    return gourl;
  },
  /**
   * @return {object}
   */
  render: function() {
    //console.log("loadone="+typeof(this.state.loadone)+",current="+typeof(this.state.current)+",showdesc="+typeof(this.state.showdesc));
    var imgItems = this.getImageItems();

    var gourl = this.getCurrentGoUrl();
    return (
    <div>
      <div className="carousel-wind-main">
        <a href={gourl} className="media-photo media-cover" >
          {imgItems}
        </a>
        <div className="carousel-wind-control carousel-wind-prev" onClick={this.prevItem} >
          <i className="icon icon-chevron-left icon-size-2 icon-white" />
        </div>
        <div className="carousel-wind-control carousel-wind-next" onClick={this.nextItem} >
          <i className="icon icon-chevron-right icon-size-2 icon-white" />
        </div>
        <a href={gourl} className="panel-overlay-bottom-left absolute-position link-reset panel-overlay-label panel-overlay-listing-label" >
          <PriceTip dataUnit="$" dataPrice={254} dataFlush={true} dataUrl={gourl}/>
        </a>
        <a href={gourl} className="panel-overlay-top-left heart-link">
          <HeartImage dataRed={false} />
        </a>
        <div className="heart-overlay-top-right">
          <HeartImage dataRed={true} />
        </div>
      </div>
      <div className="panel-body">
        <a className="media-photo-badge" href={this.props.dataUserPhotoUrl}><SellerPhotoShortCut src={this.props.dataUserPhotoUrl}/></a>
        <h3 className="h5 text-truncate row-space-top-1" itemprop="name" title="The Hollywood Experience">
          <a className="text-normal" target="listing" href={this.props.dataUserPhotoUrl}>The Hollywood Experience</a>
        </h3>
        <div className="text-muted text-truncate" itemprop="description">
          <span>
            <a className="text-normal link-reset" href={this.props.dataUserPhotoUrl}>seperate room. 1replay</a>
          </span>
        </div>
      </div>
    </div>
    );
  },

});

module.exports = CarouselPicture;

