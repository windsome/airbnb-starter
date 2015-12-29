var React = require('react');
//var $=require('jquery');
//var jQuery = $;
//require('./3rdparty/jquery.i18n.properties');
var SearchBox = require('../../components/SearchBox.react.js');
var CarouselPicture = require('../../components/CarouselPicture.react.js');
var InstantBookPanel = require('../../components/InstantBookPanel.react.js');
var PagingResult = require('../../components/PagingResult.react.js');


var DetailInfo = React.createClass({
  getInitialState: function() {
    return {
      id:'1001'
    };
  },
  componentDidMount: function() {
    var id = this.props.params.id;
    this.setState({id:id});
  },
  render: function() {
    return (
        <main id="site-content" role="main">
          <div><span>{"Detail Page! id="+this.state.id}</span></div>
        </main>
    );    
  }
});

module.exports = DetailInfo;

