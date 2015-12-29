/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var classNames = require('classnames');
var Pagination = require('./Pagination.react.js');

var PagingResult = React.createClass({
  getDefaultProps: function() {
    return {
      total:0,
      pageSize:0,
      currentPage:0
    };
  },

  getInitialState: function() {
    return {
      currentPage:this.props.currentPage
    };
  },

  /*componentDidMount:function() {

  },*/
  handleClick: function(element) {
    var pageNum = parseInt(element.currentTarget.dataset.pageNum, 10) - 1;
    // need to perform search, and reset currentPage of Pagination.
    this.setState({currentPage:parseInt(pageNum)});
  },

  /**
   * @return {object}
   */
  render: function() {
    var msg;
    var pagination;

    var pageSize = this.props.pageSize;
    var total = this.props.total;
    var currentPage = this.state.currentPage;
    var pageCount = 0;

    console.log ("pageSize="+pageSize+",total="+total+",currentPage="+currentPage);
    if (pageSize <= 0) {
      console.log ("pageSize="+pageSize+" <= 0");
      msg = $.i18n.prop('msg_pagination_pagesize_0');
      //msg = "不能设置页大小为0";
    } else if (total <= 0) {
      console.log ("total="+total+" <= 0");
      msg = $.i18n.prop('msg_pagination_total_0');
      //msg = "未查到结果，请修改查询条件试试";
    } else if (currentPage < 0) {
      console.log ("currentPage="+currentPage+" < 0");
      msg = $.i18n.prop('msg_pagination_current_page_bellow_0');
      //msg = "页面不能为负数，咋会出现这种情况呢？";
    } else {
      pageCount = parseInt((total + pageSize - 1) / pageSize);
      if (currentPage >= pageCount) {
        console.log("page exceed! currentPage="+currentPage+", pageCount="+pageCount);
        msg = $.i18n.prop('msg_pagination_current_page_exceed', currentPage, pageCount);
        //msg = "page exceed! currentPage="+currentPage+", pageCount="+pageCount;
      } else {
        // normal state.
        var currentFrom = pageSize * currentPage + 1;
        var currentTo = pageSize * (currentPage + 1);
        if (currentTo > total) {
          currentTo = total;
        }
        msg = $.i18n.prop('msg_pagination_ok_info', currentFrom, currentTo, total);
      }
    }

    return (
      <div className="pagination-buttons-container row-space-8">
        <div className="results_count"><p>{msg}</p></div>
        <Pagination activePageNum={parseInt(currentPage+1)} numPages={parseInt(pageCount)} handleClick={this.handleClick}/>
      </div>
    );
  },

});

module.exports = PagingResult;
