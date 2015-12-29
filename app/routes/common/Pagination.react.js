/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/*
 <Pagination activePageNum=1 numPages=9 handleClick={this.handleClick}/>
 */
var React = require('react');
var classNames = require('classnames');
var underscore = require('underscore');

var Pagination = React.createClass({
  propTypes: {
    activePageNum: React.PropTypes.number.isRequired,
    numPages: React.PropTypes.number.isRequired,
//    handleClick: React.func.isRequired
  },

  getDefaultProps: function() {
    return {
      activePageNum:0,
      numPages:0,
//      handleClick:null
    };
  },

  getMinPageNum: function() {
    var active = this.props.activePageNum, num = this.props.numPages;
    return 4 >= active || 5 >= num ? 2 : active === num ? active - 2 : active - 1;
  },
  getMaxPageNum: function() {
    var active = this.props.activePageNum, num = this.props.numPages;
    return active >= num - 3 || 5 >= num ? num - 1 : 1 === active ? 3 : active + 1;
  },

  renderPageGap: function() {
    return (
            <li className="gap"><span className="gap">...</span></li>
    );
  },
  renderPageLink: function(pageNum) {
    return (
            <li className={classNames({active:this.props.activePageNum === pageNum})}>
              <a href="#" data-prevent-default={true} data-page-num={pageNum} onClick={this.props.handleClick}>{pageNum}</a>
            </li>
    );
  },
  renderPreviousLink: function() {
    var pageNum = this.props.activePageNum - 1;
    return (
            <li className="prev previous_page">
              <a href="#" data-prevent-default={true} data-page-num={pageNum} onClick={this.props.handleClick}>
                <span className="screen-reader-only">$.i18n.prop('msg_pagination_previous')</span>
                <i className="icon icon-caret-left"></i>
              </a>
            </li>
    );
  },
  renderNextLink: function() {
    var pageNum = this.props.activePageNum + 1;
    return (
            <li className="next next_page">
              <a href="#" data-prevent-default={true} data-page-num={pageNum} onClick={this.props.handleClick}>
                <span className="screen-reader-only">$.i18n.prop('msg_pagination_next')</span>
                <i className="icon icon-caret-right"></i>
              </a>
            </li>
    );
  },
  /**
   * @return {object}
   */
  render: function() {
    var self = this;
    var n = this.props.activePageNum, r = this.props.numPages, i = this.getMinPageNum(), o = this.getMaxPageNum();
    console.log ("n="+n+",r="+r+",i="+i+",o="+o);
    return (
        <div className="pagination pagination-responsive">
          <ul className="list-unstyled">
            {1 !== n && this.renderPreviousLink()}
            {this.renderPageLink(1)}
            {i > 2 && this.renderPageGap()}
            {underscore.range(i, o + 1).map(function(item){return self.renderPageLink(item)})}
            {r - 1 > o && this.renderPageGap()}
            {this.renderPageLink(r)}
            {n !== r && this.renderNextLink()}
          </ul>
        </div>
    );
  },

});

module.exports = Pagination;


/*
output:
        <div className="pagination pagination-responsive">
          <ul className="list-unstyled">
            <li className="prev previous_page"><a href="/s/los-angeles--CA" rel="prev start" target="1">
              <span className="screen-reader-only">Previous</span>
              <i className="icon icon-caret-left"></i>
            </a></li>
            <li><a href="/s/los-angeles--CA" target="1" rel="prev start">1</a></li>
            <li className="active"><a href="/s/los-angeles--CA" target="2">2</a></li>
            <li><a href="/s/los-angeles--CA" target="3" rel="next">3</a></li>
            <li className="gap"><span className="gap">...</span></li>
            <li><a href="/s/los-angeles--CA?page=17" target="17">17</a></li>
            <li className="next next_page"><a href="/s/los-angeles--CA?page=3" rel="next" target="3">
              <span className="screen-reader-only">Next</span>
              <i className="icon icon-caret-right"></i>
            </a></li>
          </ul>
        </div>

 */
