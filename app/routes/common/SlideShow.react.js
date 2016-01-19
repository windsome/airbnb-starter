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
import styles from '../../scss/components/_slideshow';
const cx = classNames.bind(styles);

export default class SlideShow extends Component {
  render() {
    const { current, imgs } = this.props;
    return (
    <div className={cx('air-slideshow')}>
      <ul className={cx('list-unstyled')}>
      {imgs.map ((img, i) => {
        var show = (current%imgs.length) == i;
        return (
        <li key={i} className={cx('air-slide', {'air-slide--active': show})}>
          <img src={img}/>
        </li>)
      })}
      </ul>
    </div>
    );
  }

}

SlideShow.defaultProps = {current: 0, imgs: []};

