import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind';
import styles from '../../scss/components/_footer';
import LanguageSelect from './widgets/LanguageSelect';
import CurrencySelect from './widgets/CurrencySelect';
const cx = classNames.bind(styles);

export default class Footer extends Component {
  constructor(props) {
    super (props);
    this.state = {language:'en'};
  }
  _changeLanguage(val) {
    this.setState({language: val});
  }
  render() {
    return (
      <div className="row-condensed">
        <div className="col-md-3 col-md-offset-1">
          <div className="language-curr-picker clearfix space-2">
            <div className={cx('language-container')}>
              <label id="language-selector-label" className="screen-reader-only">Choose language</label>
              <LanguageSelect className={cx('language-selector')} aria-labelledby="language-selector-label" value={this.state.language} changeLanguage={this._changeLanguage.bind(this)}/>
            </div>
            <div className={cx('currency-container')}>
              <label id="currency-selector-label" className="screen-reader-only">选择货币</label>
              <CurrencySelect className={cx('currency-selector')} aria-labelledby="currency-selector-label"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * @return {object}
   */
/*
  render2: function() {
  	return (
<footer class="page-container-responsive">
  <div class="row row-condensed">

    <div class="col-md-3 col-md-offset-1">
      <div class="language-curr-picker clearfix space-2">
        <div class="select select-large select-block row-space-2">
</div>

          
<div class="select select-large select-block row-space-2">
  <label id="currency-selector-label" class="screen-reader-only">选择货币</label>
  <select class="currency-selector" aria-labelledby="currency-selector-label">
    
      <option value="ZAR">ZAR</option>
    
  </select>
</div>

        <div class="cx-number"></div>
      </div>

    </div>

    <div class="col-md-2 col-md-offset-1 hide-sm">
      <h2 class="h5">公司信息</h2>
      <ul class="list-layout">
        <li><a href="/about/about-us" class="link-contrast">关于</a></li>
        <li><a href="/careers" class="link-contrast">工作机会</a></li>
        <li><a href="/press/news" class="link-contrast">新闻</a></li>
        <li><a href="http://blog.airbnb.com" class="link-contrast">博客</a></li>
        <li><a href="/help" class="link-contrast">帮助</a></li>
        <li><a href="/policies" class="link-contrast">政策</a></li>
        <li><a href="/disaster-response" class="link-contrast">灾难响应</a></li>
        <li><a href="/terms" class="link-contrast">条款与隐私</a></li>
      </ul>
    </div>

    <div class="col-md-2 hide-sm">
      <h2 class="h5">发现</h2>
      <ul class="list-layout">
        <li><a href="/trust" class="link-contrast">信任与安全</a></li>
        <li><a href="/invite?r=6" class="link-contrast">邀请好友</a></li>
          <li><a href="/gift" class="link-contrast">礼品卡</a></li>
        <li><a href="/wishlists/airbnb_picks" class="link-contrast">Airbnb精选</a></li>
        <li><a href="/mobile" class="link-contrast">移动版</a></li>
        <li><a href="https://www.airbnbnyc.com" class="link-contrast">支持纽约市</a></li>
        <li><a href="/business-travel?s=footer" class="link-contrast">商务差旅</a></li>
        <li><a href="/sitemaps" class="link-contrast">网站地图</a></li>
      </ul>
    </div>

    <div class="col-md-2 hide-sm">
      <h2 class="h5">出租</h2>
      <ul class="list-layout">
        <li><a href="/host" class="link-contrast">为什么要出租?</a></li>

        <li><a href="/hospitality" class="link-contrast">好客之道</a></li>
        <li><a href="/help/responsible-hosting" class="link-contrast">房东义务</a></li>
        <li><a href="/home-safety" class="link-contrast">居家安全</a></li>
      </ul>
    </div>
  </div>

  <div class="col-sm-12 space-4 space-top-4 show-sm">
    <ul class="list-layout list-inline text-center h5">
      <li><a href="/about/about-us" class="link-contrast">关于</a></li>
      <li><a href="/careers" class="link-contrast">工作机会</a></li>
      <li><a href="/press/news" class="link-contrast">新闻</a></li>
      <li><a href="http://blog.airbnb.com" class="link-contrast">博客</a></li>
      <li><a href="/terms" class="link-contrast">条款与隐私</a></li>
    </ul>
  </div>

  <hr class="footer-divider space-top-8 space-4 hide-sm">

  <div class="text-center">
    <h2 class="h5 space-4 hide-sm">关注我们</h2>
    <ul class="list-layout list-inline" itemscope="" itemtype="http://schema.org/Organization">
      <link itemprop="url" href="https://zh.airbnb.com">
      <meta itemprop="logo" content="https://a2.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png">
        <li>
          <a href="https://www.facebook.com/airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
            <span class="screen-reader-only">Facebook</span>
            <i class="icon footer-icon icon-facebook"></i>
</a>        </li>
        <li>
          <a href="https://plus.google.com/+airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" rel="publisher" target="_blank">
            <span class="screen-reader-only">Google+</span>
            <i class="icon footer-icon icon-google-plus"></i>
</a>        </li>
        <li>
          <a href="http://www.weibo.com/airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
            <span class="screen-reader-only">微博</span>
            <i class="icon footer-icon icon-weibo"></i>
</a>        </li>

        <li>
          <a href="https://twitter.com/airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
            <span class="screen-reader-only">Twitter</span>
            <i class="icon footer-icon icon-twitter"></i>
</a>        </li>

      <li>
        <a href="https://www.linkedin.com/company/airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
          <span class="screen-reader-only">LinkedIn</span>
          <i class="icon footer-icon icon-linkedin"></i>
</a>      </li>

        <li>
          <a href="https://www.youtube.com/user/Airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
            <span class="screen-reader-only">YouTube</span>
            <i class="icon footer-icon icon-youtube"></i>
</a>        </li>
        <li>
          <a href="https://instagram.com/airbnb" class="link-contrast footer-icon-container" itemprop="sameAs" target="_blank">
            <span class="screen-reader-only">Instagram</span>
            <i class="icon footer-icon icon-instagram"></i>
</a>        </li>
    </ul>
    <div class="space-top-2 text-muted">
      © Airbnb, Inc.
    </div>
  </div>
</footer>
    );
  },
*/

}

