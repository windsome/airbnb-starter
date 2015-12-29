/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
//var $ = require('jquery');
var classNames = require('classnames');

var InstantBookPanel = React.createClass({
  getDefaultProps: function() {
    return {
      left:-999,
      top:-999,
      ariaHidden:true
    };
  },
  componentDidMount:function() {
    var self = this;
    $(".icon-instant-book").hover(function() {
      var width = $(this).width();
      var height1 = $(this).height();
      var height2 = $(self.getDOMNode()).height();
      var distance = (height2-height1)/2;
      var left = ($(this).offset().left+width+5)+"px";
      var top = ($(this).offset().top - distance) +"px";
      var scrollTop = $(this).scrollTop();
      var pos_top = $(this).position().top;
      console.log("top="+top+",scrollTop="+scrollTop+",posTop="+pos_top+", add="+(scrollTop+pos_top));
      $(self.getDOMNode()).css({"left":left,"top":top,"position":"absolute"});
      $(self.getDOMNode()).show();
      //$(this).css({"left":"100px","top":"200px","position":"fixed"});
      //$("#quick_book_panel").show();
    },function() {
      $(self.getDOMNode()).css({"left":"-9999px","top":"-9999px","position":"fixed"});
      $(self.getDOMNode()).hide();
      //$(this).css({"left":"-9999px","top":"-9999px"});
      //$("#quick_book_panel").hide();
    }
    );
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
    <div id="quick_book_panel" className={classNames({'tooltip tooltip-left-middle ib-icon-tooltip':true,'show':!this.props.ariaHidden})} role="tooltip" style={{left:this.props.left, top:this.props.top}} aria-hidden={this.props["aria-hidden"]} data-shutup data-test1="test">
      <div className="panel-body">
        { false? (<div className="h5 space-1">即时预订</div>) :
        (<p className="text-muted">无需等待房东接受申请即可预订住宿</p>)}
      </div>
    </div>
    );
  },

});

module.exports = InstantBookPanel;
