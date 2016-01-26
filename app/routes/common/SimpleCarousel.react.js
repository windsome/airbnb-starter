import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
//import classNames from 'classnames/bind';
//import styles from '../../scss/components/_carousel-simple';
//const cx = classNames.bind(styles);
import ResponsiveImage from './widgets/ResponsiveImage';

export default class SimpleCarousel extends Component {

  render() {
    return (
        <div className="responsive-img-outer">
          <ResponsiveImage imgurl={this.props.imgurl} />
          <div className="carousel-windctrl prev" onClick={this.props.prevItem} >
            <i className="glyphicon glyphicon-chevron-left icon-size-2 icon-white" />
          </div>
          <div className="carousel-windctrl next" onClick={this.props.nextItem} >
            <i className="glyphicon glyphicon-chevron-right icon-size-2 icon-white" />
          </div>
        </div>
    );
  }

}


