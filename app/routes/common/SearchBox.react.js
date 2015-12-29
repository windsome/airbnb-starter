/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var SearchBox = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
<div className="filters collapse">
  <div className="panel-header filters-section show-sm">筛选条件</div>
  <div className="filters-section intro-filter panel-body panel-light">
    <div className="row">
      <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label">
        <label>日期</label>
      </div>
      <form className="col-lg-9 trip-form">
        <div className="row row-condensed">
          <div className="col-md-4 col-sm-6 row-space-1-sm">
            <label htmlFor="map-search-checkin" className="screen-reader-only">入住</label>
            <input name="checkin" id="map-search-checkin" autocomplete="off" className="checkin tour-target ui-datepicker-target" placeholder="入住" type="text"/>
          </div>
          <div className="col-md-4 col-sm-6 row-space-1-sm">
            <label htmlFor="map-search-checkout" className="screen-reader-only">退房</label>
            <input name="checkout" id="map-search-checkout" autocomplete="off" className="checkout tour-target ui-datepicker-target" placeholder="退房" type="text"/>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="select select-block">
              <label htmlFor="guest-select" className="screen-reader-only">入住人数</label>
              <select name="guests" className="guest-select" id="guest-select" data-prefill="">
                <option value="1">1位房客</option>
                <option value="2">2位房客</option>
                <option value="3">3位房客</option>
                <option value="4">4位房客</option>
                <option value="5">5位房客</option>
                <option value="6">6位房客</option>
                <option value="7">7位房客</option>
                <option value="8">8位房客</option>
                <option value="9">9位房客</option>
                <option value="10">10位房客</option>
                <option value="11">11位房客</option>
                <option value="12">12位房客</option>
                <option value="13">13位房客</option>
                <option value="14">14位房客</option>
                <option value="15">15位房客</option>
                <option value="16">16+位房客</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    );
  },

});

module.exports = SearchBox;
