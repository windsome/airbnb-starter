import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import SimpleCarousel from '../common/SimpleCarousel.react';
import classNames from 'classnames';
//import classNames from 'classnames/bind';
//import styles from '../../scss/components/_carousel-simple';
//const cx = classNames.bind(styles);

export default class ListingPanel extends Component {

  render() {
    const { imgurl, name, price, unit, lat, lng, user, prevPic, nextPic } = this.props;

    return (
      <div className="carousel-wind-main">
        <SimpleCarousel imgurl={imgurl} prevItem={prevPic} nextItem={nextPic} />
        <div className="text-left">
          <h3>{name}</h3>
          <p>{imgurl}</p>
        </div>
      </div>
    );
  }

}


