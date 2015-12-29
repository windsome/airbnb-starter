'use strict';

var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var RouteLink = React.createClass({
  mixins: [History],

  render: function() {
    /*
    var isActive = this.history.isActive(this.props.to, this.props.query);
    var activeClassName = isActive ? 'am-active' : '';
    var link = (
      <Link {...this.props} />
    );*/

    return <Link {...this.props} />;
  }
});

module.exports = RouteLink;

