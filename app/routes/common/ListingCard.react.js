/**
 * <CarouselPicture loadone=true showdesc=false current=0 data='{id:1,desc:'desc',gourl='abc',items:[{id:100,desc:'100',imgurl:'/res/0.jpg',gourl:'/0'},{id:101,desc:'101',imgurl:'/res/1.jpg',gourl:'/1'},{id:102,desc:'102',imgurl:'/res/2.jpg',gourl:'/2'}]}'/>
 *
 */

/*
{name:"room in beijing." should_lazy_load: true, default_pic_url: "/img/default/pic/url", x_medium_pic_url:"/img/medium/pic/url", show_photo_carousel:true, all_pic_urls:["/img/pic1", "/img/pic2", "/img/pic3"],
show_price:true, price:100.2, per_month:true, instant_book:true, show_instant_book_icon:true, currency_symbol_left:"$", currency_symbol_right:"$"
}

 */
var React = require('react');
var classNames = require('classnames');

var ListingCard = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		p3_link_target: React.PropTypes.string,
		//listing: ListingShape,
		onCardClick: React.PropTypes.func,
		onWishlistButtonClick: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			p3_link_target: "_self"
		}
	},
	i18n: function(key) {
		// get i18n value of key.
		return key;
	},
	renderImage: function() {
		var e = this.props.listing;
		var classes = classNames({"img-responsive-height": true, hide: e.should_lazy_load});
		var pic = e.should_lazy_load ? e.default_pic_url : e.x_medium_pic_url;
		return ({e.show_photo_carousel ? 
			(<img src=pic itemProp="image" data-current=0 data-urls=JSON.stringify(e.all_pic_urls) className=classes alt=e.name/>)
			:
			(<img src=pic itemProp="image" data-current=0 className=classes alt=e.name/>)
		})
	},
	renderListingImage: function() {
		var e = this.props.listing;
		var price = React.createElement("div", null, this.renderPrice());
		return e.all_pic_urls ? React.createElement("div", null, price) : price;
	},
	renderPlaceholder: function() {
		return (
			<div className="listing">
				<div className="panel-image listing-img">
					<div className="media-photo media-cover">
						<div className="listing-img-container media-cover text-center">
							<div className="row row-table row-full-height">
								<div className="col-12 col-middle">
									<i className="icon icon-home icon-size-3 text-contrast"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-body panel-card-section">
					<div className="media">
						<div className="pull-right media-photo media-round card-profile-picture card-profile-picture-offset">
							<span className="text-normal">
								<h3 className="h5 listing-name text-truncate rou-space-top-1"> </h3>
							</span>
							<div className="text-muted listing-location text-truncate"> </div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	renderPrice: function() {
		var e = this.props.listing;
		var t = e.price || {};
		var per_month = e.per_month ? (
			<span className="h5"><small>this.i18n(e.per_month)</small></span>
			) : (void 0);
		var instant = e.instant_book ? (e.show_instant_book_icon? (
				<span className="h3 icon-beach" data-behavior="tooltip" title=this.i18n("instant_book_tooltip")>
					<i className="icon icon-instant-book icon-flush-sides"/>
				</span>
			) : (
				<i className="h6 icon-beach"> this.i18n(e.instant_book)</i>
			)) : (void 0);
		return (
			<div className="panel-overlay-bottom-left panel-overlay-label panel-overlay-listing-label">
				<div>
					<sup className="h6 text-contrast">e.currency_symbol_left</sup>
					<span className="h3 price-amount">e.price_to_display</span>
					{per_month}
					<sup className="h6 text-contrast">e.currency_symbol_right</sup>
					{instant}
				</div>
			</div>
		);
	},
	renderWishlistButton: function() {
		if (this.props.listing.show_wishlist_button) {
			var e = this.props.listing;
			var t = "wishlist-widget-"+String(e.id);
			return (
				<span className="rich-toggle wish_list_button wishlist-button" data-img=e.x_medium_pic_url data-name=e.name data-address=e.address data-hosting_id=e.id, data-summary=e.summary data-description e.description onClick=this.handleWishlistButtonClick>
					<input type="checkbox" id=t name=t data-for-hosting=e.id/>
					<label htmlFor=t>
						<i className="icon icon-heart icon-rausch icon-size-2 rich-toggle-checked"/>
						<i className="icon icon-heart icon-size-2 wishlist-heart-unchecked rich-toggle-unchecked"/>
						<i className="icon icon-heart-alt icon-white icon-size-2"/>
					</label>
				</span>
			);
		}
	},
	renderDebug: function() {
		var e = this.props.listing;
		if (e.debug_string)
			return (
				<div className="debug-string">{e.debug_string}</div>
			);
	},
	renderSummary: function() {
		var e = this.props.listing;
		if (e.include_summary)
			return (
				<div className="listing-description">
					<div className="summary">
						<p>{e.summary}</p>
						<div className="tooltip tooltip-top-middle" role="tooltip" data-trigger={"#tooltip-sticky-"+String(e)} aria-hidden="true">
							<p className="panel-body">{e.description}</p>
						</div>
					</div>
					<p className="address">{e.address}</p>
					<div className="details row-space-2">{e.details}</div>
				</div>
			);
	},
	handleClick: function(e) {
		this.props.onCardClick && this.props.onCardClick(e, this.props.listing);
	},
	handleWishlistButtonClick: function(e) {
		this.props.onWishlistButtonClick && this.props.onWishlistButtonClick(e, this.props.listing);
	},
	render: function() {
		var e = this.props.listing;
		if (!e) return this.renderPlaceholder();
		return (
			<div data-lat={e.lat} data-lng={e.lng} data-name={e.name} data-url={e.url} data-user={e.userId} data-id={e.id} data-instant-book={e.instant_book} data-price={e.price_to_display}>
				{this.renderSummary()}
				<div className="panel-image listing-img">
					<a className="media-photo media-cover" onClick={this.handleClick} target={this.props.p3_link_target}>
						<div className="listing-img-container media-cover text-center">
						{this.renderImage()}
						</div>
					</a>
					{this.renderListingImage()}
					<div className="panel-overlay-top-right wl-social-connection-panel">
					{this.renderWishlistButton()}
					</div>
				</div>
				<div className="panel-body panel-card-section">
					<div className="media">
						<a href={"/users/show/"+e.user.id} className="pull-right media-photo-badge card-profile-picture card-profile-picture-offset">
							<div className="media-photo media-round">
								<img src={e.user.thumbnail_url} alt={e.user.first_name}/>
								{e.show_superhost_badge && (
								<img src=e.superhost_img_path className="superhost-photo-badge superhost-photo-badge--small" />)}
							</div>
						</a>
						<a href={e.url} className="text-normal" onClick={this.handleClick} target={this.props.p3_link_target}>
							<h3 title={e.name} className="h5 listing-name text-truncate row-space-top-1">{e.name}</h3>
						</a>
						<div className="text-muted listing-location text-truncate">{e.footer_text}</div>
					</div>
					{this.renderDebug()}
				</div>
			</div>
		);
	},
});

//var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

