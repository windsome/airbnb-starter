import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind';
import styles from '../../scss/components/_header';

const cx = classNames.bind(styles);

export default class Header extends Component {

  render() {
    return (
        <div className={cx('header', 'clearfix')} >
          <div className={cx('comp', 'pull-left')}>
            <Link className={cx('link-btn')} to="/house">
              <i className={cx('logo', 'glyphicon', 'glyphicon-oil')}/>
              <span className={cx('pull-left')}> CAU-Farm </span>
            </Link>
          </div>
          <div className={cx('comp', 'pull-left')}>
            <form>
            <div>
              <i className={cx('glyphicon', 'glyphicon-search', 'search-icon')}/>
              <label className="screen-reader-only"> Where are you going?</label>
              <input id="header-search-form" name="location" className={cx('location')} autocomplete="off" placeholder="Where are you going?"/>
            </div>
            </form>
          </div>

          <div className={cx('comp', 'pull-right')}>
            <Link className={cx('link-btn')} to="/house">
              <span>Log In</span>
            </Link>
          </div>
          <div className={cx('comp', 'pull-right')}>
            <Link className={cx('link-btn')} to="/house">
              <span>Sign Up</span>
            </Link>
          </div>
          <div className={cx('comp', 'pull-right')}>
            <Link className={cx('link-btn')} to="/house">
              <span>Help</span>
            </Link>
          </div>
        </div>
    );
  }

}

