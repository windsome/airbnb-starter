import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import SimpleCarousel from '../common/SimpleCarousel.react';
import classNames from 'classnames';
//import classNames from 'classnames/bind';
//import styles from '../../scss/components/_carousel-simple';
//const cx = classNames.bind(styles);

export default class ListingPanel extends Component {

  render() {
    const { imgUrl, name, description, price, unit, user, avatar, prevItem, nextItem } = this.props;

    return (
      <div className="carousel-wind-main">
        <SimpleCarousel imgClass="responsive-imgh" imgUrl={imgUrl} prevItem={prevItem} nextItem={nextItem} />
        <div className="text-left panel-card-section">
          <h3 className="h3 text-truncate">{name}</h3>
          <p className="h5 text-truncate">{description}</p>
        </div>
      </div>
    );
  }

}


