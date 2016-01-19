/**
 * <CarouselPicture loadone=true showdesc=false current=0 data='{id:1,desc:'desc',gourl='abc',items:[{id:100,desc:'100',imgurl:'/res/0.jpg',gourl:'/0'},{id:101,desc:'101',imgurl:'/res/1.jpg',gourl:'/1'},{id:102,desc:'102',imgurl:'/res/2.jpg',gourl:'/2'}]}'/>
 *
 * <SimpleCarousel data-current=0 data-items=>
 *
 */

import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
//import classNames from 'classnames';
import classNames from 'classnames/bind';
import styles from '../../scss/components/_carousel-simple';
const cx = classNames.bind(styles);

export default function connectToTimer(Component) {
class TimerComponent extends Component {
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
  componentWillMount() {
    this.intervals = [];
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
  render() {
    return <Component {...this.props} {...this.state} />;
  }

}
TimerComponent.defaultState = {};
return TimerComponent;
}

