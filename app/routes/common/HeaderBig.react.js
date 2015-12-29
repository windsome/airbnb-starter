/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var RouteLink = require('./RouteLink.react');

var SearchPanel = React.createClass({
	render: function() {
		return (
<div id="header-search-settings" className="panel search-settings header-menu">
  <div className="panel-body clearfix basic-settings">
    <div className="setting checkin">
      <label htmlFor="header-search-checkin" className="field-label">
        <strong>
          退房
        </strong>
      </label>
      <input id="header-search-checkin" data-field-name="check_in_dates" name="checkin" className="checkin ui-datepicker-target" placeholder="年-月-日" type="text"/>
    </div>
    <div className="setting checkout">
      <label htmlFor="header-search-checkout" className="field-label">
        <strong>
          退房
        </strong>
      </label>
      <input id="header-search-checkout" data-field-name="check_out_dates" className="checkout ui-datepicker-target" name="checkout" placeholder="年-月-日" type="text" />
    </div>
    <div className="setting guests">
      <label htmlFor="header-search-guests" className="field-label">
        <strong>
          房客
        </strong>
      </label>
      <div className="select select-block">
        <select id="header-search-guests" data-field-name="number_of_guests" name="guests">
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
          <option value="6">
            6
          </option>
          <option value="7">
            7
          </option>
          <option value="8">
            8
          </option>
          <option value="9">
            9
          </option>
          <option value="10">
            10
          </option>
          <option value="11">
            11
          </option>
          <option value="12">
            12
          </option>
          <option value="13">
            13
          </option>
          <option value="14">
            14
          </option>
          <option value="15">
            15
          </option>
          <option value="16">
            16
          </option>
        </select>
      </div>
    </div>
  </div>
  <div className="panel-header menu-header normal-line-height">
    <small>
      <strong>
        房间类型
      </strong>
    </small>
  </div>
  <div className="panel-body">
    <div className="row-space-4">
      <label className="checkbox menu-item" htmlFor="room_type_0">
        <input id="room_type_0" data-room-type="entire_home" name="room_types[]" value="Entire home/apt" type="checkbox"/>
        <i className="icon icon-entire-place horizontal-margin-medium">
        </i>
        <span>
          整套房子/公寓
        </span>
      </label>
      <label className="checkbox menu-item" htmlFor="room_type_1">
        <input id="room_type_1" data-room-type="private_home" name="room_types[]" value="Private room" type="checkbox"/>
        <i className="icon icon-private-room horizontal-margin-medium">
        </i>
        <span>
          独立房间
        </span>
      </label>
      <label className="checkbox menu-item" htmlFor="room_type_2">
        <input id="room_type_2" data-room-type="shared_room" name="room_types[]" value="Shared room" type="checkbox"/>
        <i className="icon icon-shared-room horizontal-margin-medium">
        </i>
        <span>
          合住房间
        </span>
      </label>
    </div>
    <button type="submit" className="btn btn-primary btn-block">
      <i className="icon icon-search">
      </i>
      <span>
        寻找住处
      </span>
    </button>
  </div>
</div>
		);
	}
});

var UserCenterPanel = React.createClass({
	render: function() {
		return (
  <div className="panel  drop-down-menu avatar-tooltip--new">
    <div className="panel-header no-border hide-lg">
      <strong><span className="value_name">Windsome</span></strong>
    </div>
      <a href="/trips" className=" panel-body link-reset hover-item no-crawl" data-href="/trips">
        <div className="hover-item__content">您的旅程</div>
      </a>
      <a href="/wishlists/my" className=" panel-body link-reset hover-item no-crawl" data-href="/wishlists/my">
        <div className="hover-item__content">心愿单</div>
      </a>
      <a href="/users/edit" className=" panel-body link-reset hover-item no-crawl" data-href="/users/edit">
        <div className="hover-item__content">编辑个人资料</div>
      </a>
      <a href="/invite?r=3" className=" panel-body link-reset hover-item">
        <div className="hover-item__content">邀请好友</div>
      </a>
      <a href="/help/community?page=nav_bar&amp;section=user_dropdown" className="community-center-low-intent hide panel-body link-reset hover-item no-crawl" data-href="/help/community?page=nav_bar&amp;section=user_dropdown">
        <div className="hover-item__content">社区中心</div>
      </a>
      <a href="/users/notifications" className=" panel-body link-reset hover-item no-crawl" data-href="/users/notifications">
        <div className="hover-item__content">帐号设置</div>
      </a>
      <a href="/business" className="business-travel hide panel-body link-reset hover-item no-crawl" data-href="/business">
        <div className="hover-item__content">商务差旅</div>
      </a>
      <a href="/logout" className=" panel-body link-reset hover-item no-crawl" data-href="/logout">
        <div className="hover-item__content">退出</div>
      </a>
  </div>

		);
	}
});

var ServiceCenterPanel = React.createClass({
	render: function() {
		return (
  <div className="panel  drop-down-menu host-tooltip--new">
    <div className="panel-header no-border hide-lg">
      <span><strong>房东</strong></span>
    </div>
    <div className="hover-item panel-body relist-your-space">
      <a href="https://zh.airbnb.com/manage-listing/9893687" className="link-reset click-area">
        <img src="https://z2.muscache.com/ac/pictures/93c7c460-bcb7-4c68-93a9-48180b98aa7c.jpg?interpolation=lanczos-none&amp;size=small&amp;output-format=jpg&amp;output-quality=70" className="listing-image"/>
        <div class="cta-container va-container va-container-v">
          <div className="va-middle">
            <div className="cta-text">完成您的房源发布</div>
            <div className="progress">
              <div style={{width:"43%"}} className="progress-bar"/>
            </div>
          </div>
        </div>
      </a>
      <div className="close-button hide">
        <a href="#" className="alert-close"></a>
      </div>
    </div>

      <a href="/dashboard" className="panel-body link-reset hover-item origin-item js-host-dashboard-link no-crawl hide" data-href="/dashboard">
        <div className="hover-item__content">
          控制面板
          
        </div>
      </a>
      <a href="/rooms" className="panel-body link-reset hover-item origin-item js-host-manage-listings-link no-crawl hide" data-href="/rooms">
        <div className="hover-item__content">
          管理房源
          <i className="alert-count js-listing-count listing-count listing-count--inline text-center fade in hide">!</i>
        </div>
      </a>
      <a href="/rooms/new" className="panel-body link-reset hover-item origin-item js-host-list-your-space-link hide">
        <div className="hover-item__content">
          发布空间
          
        </div>
      </a>
      <a href="/my_reservations" className="panel-body link-reset hover-item origin-item js-host-my-reservations-link no-crawl hide" data-href="/my_reservations">
        <div className="hover-item__content">
          您的预订
        </div>
      </a>
      <a href="/users/transaction_history" className="panel-body link-reset hover-item origin-item js-host-transaction-history-link no-crawl hide" data-href="/users/transaction_history">
        <div className="hover-item__content">
          交易记录
        </div>
      </a>
      <a href="/refer?r=41" className="panel-body link-reset hover-item origin-item hide item-refer-hosts js-host-refer-hosts-link no-crawl" data-href="/refer?r=41">
        <div className="hover-item__content">
          推荐房东
          <span className="label label-pink label-new">New</span>
        </div>
      </a>
      <a href="/users/reviews" className="panel-body link-reset hover-item origin-item js-host-reviews-link no-crawl hide" data-href="/users/reviews">
        <div className="hover-item__content">
          评价
          
        </div>
      </a>
      <a href="/host-assist" className="panel-body link-reset hover-item origin-item js-host-assist-link hide">
        <div className="hover-item__content">
          房东助手
          
        </div>
      </a>
      <a href="/hospitality" className="panel-body link-reset hover-item origin-item js-host-hospitality-link hide">
        <div className="hover-item__content">
          好客之道
          
        </div>
      </a>
  </div>

		);
	}
});

var HelpPanel = React.createClass({
  render: function() {
    return (
    <div className="field-guide panel drop-down-menu">
      <div>
        <div className="main-content">
          <div className="text-left search-container">
            <div className="search-input-container">
              <div className="icon-search-container">
                <i className="icon-light-gray icon icon-size-2 icon-search article-link-icon">
                </i>
              </div>
              <input className="search-input" name="q" autocomplete="off" value="" placeholder="我们怎样才能帮到您？" type="text"/>
            </div>
            <div className="search-results-container text-dark-gray">
              <div className="search-results">
                <div>
                  <div className="search-panel-header panel-header no-border">
                    推荐的文章
                  </div>
                  <a href="/help/article/125" className="article-link article-link-panel link-reset hover-item">
                    <div className="hover-item__content">
                      <div className="col-middle-alt article-link-left">
                        <i className="icon icon-light-gray icon-size-2 article-link-icon icon-description">
                        </i>
                      </div>
                      <div className="col-middle-alt article-link-right">
                        为预订支付费用
                      </div>
                    </div>
                  </a>
                  <a href="/help/article/51" className="article-link article-link-panel link-reset hover-item">
                    <div className="hover-item__content">
                      <div className="col-middle-alt article-link-left">
                        <i className="icon icon-light-gray icon-size-2 article-link-icon icon-description">
                        </i>
                      </div>
                      <div className="col-middle-alt article-link-right">
                        Airbnb是如何处理付款的？
                      </div>
                    </div>
                  </a>
                  <a href="/help/article/50" className="article-link article-link-panel link-reset hover-item">
                    <div className="hover-item__content">
                      <div className="col-middle-alt article-link-left">
                        <i className="icon icon-light-gray icon-size-2 article-link-icon icon-description">
                        </i>
                      </div>
                      <div className="col-middle-alt article-link-right">
                        房东更改预订
                      </div>
                    </div>
                  </a>
                  <a href="/help/article/450" className="article-link article-link-panel link-reset hover-item">
                    <div className="hover-item__content">
                      <div className="col-middle-alt article-link-left">
                        <i className="icon icon-light-gray icon-size-2 article-link-icon icon-description">
                        </i>
                      </div>
                      <div className="col-middle-alt article-link-right">
                        什么是“已验证身份”？
                      </div>
                    </div>
                  </a>
                  <a href="/help/article/140" className="article-link article-link-panel link-reset hover-item">
                    <div className="hover-item__content">
                      <div className="col-middle-alt article-link-left">
                        <i className="icon icon-light-gray icon-size-2 article-link-icon icon-description">
                        </i>
                      </div>
                      <div className="col-middle-alt article-link-right">
                        Airbnb如何处理保证金？
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="expandable-indicator">
              </div>
            </div>
          </div>
        </div>
        <div className="help-link-bottom">
          <a href="/help" data-prevent-default="true">
            <span>
              帮助中心
            </span>
          </a>
        </div>
      </div>
    </div>
    );
  }
});

var HeaderBig = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (


<div className="regular-header regular-header--new clearfix hide-sm" id="new-header">    
  <div className="comp pull-left">
    <RouteLink hash={false} to="/house/" className="hdr-btn link-reset belo-container">
      <i className="icon icon-pos--lower icon-rausch icon-airbnb-alt h2 show-login"></i>
      <i className="icon icon-pos--lower icon-rausch icon-airbnb show-logout"></i>
    </RouteLink>
  </div>
  
  <div className="comp pull-left search-bar-wrapper">
    <form action="/s" className="search-form">
      <div className="search-bar">
        <i className="header-icon icon-search-alt-gray search-icon"></i>
        <label className="screen-reader-only" htmlFor="header-search-form">想去哪里？</label>
        <input placeholder="想去哪里？" autocomplete="off" name="location" id="header-search-form" className="location" value="首尔, South Korea" type="text" />
        <input name="source" value="hdr" type="hidden"/>
      </div>
      {/*<SearchPanel />*/}
    </form>
  </div>
  
  
    
  <div className="comp pull-right show-login">
    <RouteLink hash={false} to="/house/info/1" className="no-crawl hdr-btn link-reset header-avatar-trigger needsclick" rel="nofollow" href="/trips" data-href="/dashboard" data-href-host="/trips">
      <span className="value_name margin-right--tiny hide-md">Windsome</span>
      <div className="media-photo media-round user-profile-image header-icon icon-profile-alt-gray">
        <img src="https://z2.muscache.com/ac/pictures/cd3eab4d-d1ac-4c1c-9060-6847c1dd4b1a.jpg?interpolation=lanczos-none&amp;crop=w:w;*,*&amp;crop=h:h;*,*&amp;resize=50:*&amp;output-format=jpg&amp;output-quality=70" alt="" height="28" width="28"/>
      </div>
    </RouteLink>
    {/*<UserCenterPanel />*/}
  </div>
  
  
    <div className="comp pull-right show-logout">
    <RouteLink to="NoFound" data-login-modal="" href="/login" data-redirect="redirect_params[action]=index&amp;redirect_params[controller]=search&amp;redirect_params[location]=Seoul%2C+South+Korea&amp;redirect_params[path_location]=Seoul--South-Korea" className="hdr-btn link-reset">
      登录
    </RouteLink>
  </div>
  <div className="comp pull-right show-logout">
    <RouteLink to="/list/1" data-signup-modal="" data-header-view="true" href="/signup_login" data-redirect="redirect_params[action]=index&amp;redirect_params[controller]=search&amp;redirect_params[location]=Seoul%2C+South+Korea&amp;redirect_params[path_location]=Seoul--South-Korea" className="hdr-btn link-reset">
      注册
    </RouteLink>
  </div>
  
  <div className="comp pull-right no-border help-trigger-wrapper" id="js-header-help-menu">
    <RouteLink hash={false} to="/house/list/1" className="hdr-btn js-help-toggle link-reset needsclick" >
      <span className="margin-right--tiny hide-md">帮助</span>
      <span>&nbsp;</span>
      <i className="header-icon icon-lifesaver-alt-gray"></i>
    </RouteLink>
    {/*<HelpPanel />*/}
  </div>
  
    
  <div className="comp pull-right show-login">
    <RouteLink hash={false} to="/house/info/1" className="needsclick no-crawl hdr-btn link-reset js-inbox-comp " href="/inbox" data-href="/inbox" rel="nofollow">
      <div className="inbox-icon-container text-center">
        <span className="margin-right--tiny hide-md">消息</span>
        <i className="header-icon message-icon icon-message-alt-gray">
          <i className="alert-count unread-count text-center fade in">1</i>
        </i>
      </div>
    </RouteLink>
  
    {/*<div className="panel  drop-down-menu notifications-dropdown"><div class="loading"></div></div>*/}
  </div>
  
  
    
  <div className="comp pull-right show-host">
    <RouteLink to="/house/rooms" className="needsclick host-icon-wrapper no-crawl hdr-btn link-reset js-host-menu-icon " rel="nofollow" data-href="/rooms">
      <span className="hide-md margin-right--tiny">
        房东
      </span>
      <i className="header-icon host-icon icon-home-alt-gray">
        <i className="alert-count js-listing-count listing-count text-center fade in">!</i>
      </i>
    </RouteLink>
    {/*<ServiceCenterPanel />*/}
  </div>
  
  
    
  <div className="comp pull-right hide" data-behavior="recently-viewed__container">
    <div>
      <a className="no-crawl hdr-btn link-reset " href="/history#docked-filters" data-prevent-default="" data-href="/history#docked-filters" data-behavior="recently-viewed__trigger">
        <span className="hide-md margin-right--tiny">
          最近浏览记录
        </span>
        <i className="icon icon-recently-viewed h3 margin-right--small icon-pos--lower icon-gray"></i>
      </a>
    </div>
  
    {/*<div className="panel  drop-down-menu recently-viewed__dropdown" data-behavior="recently-viewed__dropdown">
    </div>*/}
  </div>
  
</div>
    );
  },

});

module.exports = HeaderBig;
