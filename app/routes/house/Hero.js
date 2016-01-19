import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as BaiduActionCreators from '../../actions/baidu';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../actions/baidu';
import Carousel from '../common/SimpleCarousel.react';
//import Carousel from '../common/CarouselBootstrap.react';

class Hero extends Component {
  componentDidMount() {
    console.log("componentDidMount:enter");
    const { dispatch, selectedReddit } = this.props
    dispatch (fetchPostsIfNeeded(selectedReddit))
    console.log("componentDidMount:exit");
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps:enter");
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
    console.log("componentWillReceiveProps:exit");
  }

  prevItem() {
  }
  nextItem() {
  }

  render() {
    console.log("render:enter");
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    //const { selectedReddit, items, isFetching, lastUpdated } = this.props;
    console.log ("posts:"+JSON.stringify(posts));
    var rand = parseInt(Math.random() * posts.length);
    console.log("render:exit rand="+rand);
    var imgurl = posts[rand];
    //var imgurl = "http://tupian.qqjay.com/u/2013/1127/19_222949_14.jpg";

    return (
      <div className="container">
        <span>just empty for house</span>
        <div className="row">
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
          <div className="col-sm-6 col-md-4"><Carousel imgurl={imgurl} prevItem={this.prevItem} nextItem={this.nextItem} /></div>
        </div>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Main)
//export default connect()(Main);

