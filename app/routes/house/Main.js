import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as BaiduActionCreators from '../../actions/baidu';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../actions/baidu';
import { setHeroSlideIndex } from '../../actions/houseMain';
import styles from '../../scss/components/_house-main';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import Input from '../common/widgets/Input';
import Carousel from '../common/SimpleCarousel.react';
import SlideShow from '../common/SlideShow.react';

class Main extends Component {
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
  componentWillMount() {
    this.intervals = [];
  }
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
  changeSlide() {
    const { dispatch, heroSlideIndex } = this.props
    dispatch(setHeroSlideIndex(heroSlideIndex+1));
    //this.setState ({current: this.state.current+1})
  }
  changeReddit() {
    //const reddits = ['美女', '野兽', '帅哥', '校花', '校草', '鲜花'];
    const reddits = ['beauty', 'prety', 'cute', 'flower', 'sea', 'wind'];
    const { dispatch, selectedReddit } = this.props
    var rand = parseInt(Math.random() * reddits.length);
    dispatch (selectReddit(reddits[rand]))
    dispatch (fetchPostsIfNeeded(reddits[rand]))
    
  }
  componentDidMount() {
    console.log("componentDidMount:enter");
    //this.setInterval(this.tick, this.props.interval);
    this.setInterval(this.changeSlide.bind(this), 2000);
    const { dispatch, selectedReddit } = this.props
    dispatch (fetchPostsIfNeeded(selectedReddit))
    this.setInterval(this.changeReddit.bind(this), 20000);
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
    const { selectedReddit, posts, isFetching, lastUpdated, heroSlideIndex } = this.props;
    //const { selectedReddit, items, isFetching, lastUpdated } = this.props;
    console.log ("posts:"+JSON.stringify(posts));
    var rand = parseInt(Math.random() * posts.length);
    console.log("render:exit rand="+rand);
    var imgurl = posts[rand];
    //var imgurl = "http://tupian.qqjay.com/u/2013/1127/19_222949_14.jpg";

    return (
      <div className="container">
        <div className={cx("hero")}>
          <div className={cx("hero__background")}>
            <SlideShow current={heroSlideIndex} imgs={posts}/>
          </div>
          <div className={cx("hero__content", "text-center", "clearfix")}>
            <div className="va-container va-container-v va-container-h">
              <div className="va-middle col-sm-12">
                <h1 className="text-jumbo text-uppercase"> Welcome Home </h1>
                <h4> Rent unique places to stay from local hosts in 100 countries</h4>
              </div>
            </div>
            <div className={cx("hero__content-footer", "va-container", "va-container-h")}>
              <div id="searchbar" className="searchbar" className={cx("va-middle", "col-sm-12")}>
                <Input id="location" name="location" type="text" placeholder="Where do you want to go?" className="menu-autocomplete-input form-inline location input-large input-contrast" labelClass="searchbar__location" />
                <Input id="checkin" name="checkin" type="text" placeholder="check in time" className="menu-autocomplete-input form-inline location input-large input-contrast" labelClass="searchbar__location" />
                <Input id="checkout" name="checkout" type="text" placeholder="check in time" className="menu-autocomplete-input form-inline location input-large input-contrast" labelClass="searchbar__location" />
              </div>
            </div>
          </div>
        </div>
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
  const { selectedReddit, postsByReddit, heroSlideIndex } = state
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
    lastUpdated,
    heroSlideIndex
  }
}

export default connect(mapStateToProps)(Main)
//export default connect()(Main);

