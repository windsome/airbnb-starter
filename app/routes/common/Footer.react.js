import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

var styles = {};
styles.footer1 = {
	width:'100%',
	boxSizing:'border-box',
    textAlign:'center',
	background:'#eee'
};

export default class Footer extends Component {

  render() {
    return (
        <div style={styles.footer1} >
          <span> FOOT CONTENT </span>
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
  <label id="language-selector-label" class="screen-reader-only">
    选择语言
  </label>
  <select class="language-selector" aria-labelledby="language-selector-label">
    
      <option value="id">Bahasa Indonesia</option>
    
      <option value="ms">Bahasa Melayu</option>
    
      <option value="ca">Català</option>
    
      <option value="da">Dansk</option>
    
      <option value="de">Deutsch</option>
    
      <option value="en">English</option>
    
      <option value="es">Español</option>
    
      <option value="el">Eλληνικά</option>
    
      <option value="fr">Français</option>
    
      <option value="it">Italiano</option>
    
      <option value="hu">Magyar</option>
    
      <option value="nl">Nederlands</option>
    
      <option value="no">Norsk</option>
    
      <option value="pl">Polski</option>
    
      <option value="pt">Português</option>
    
      <option value="fi">Suomi</option>
    
      <option value="sv">Svenska</option>
    
      <option value="tr">Türkçe</option>
    
      <option value="is">Íslenska</option>
    
      <option value="cs">Čeština</option>
    
      <option value="ru">Русский</option>
    
      <option value="th">ภาษาไทย</option>
    
      <option value="zh" selected="">中文 (简体)</option>
    
      <option value="zh-TW">中文 (繁體)</option>
    
      <option value="ja">日本語</option>
    
      <option value="ko">한국어</option>
    
  </select>
</div>

          
<div class="select select-large select-block row-space-2">
  <label id="currency-selector-label" class="screen-reader-only">选择货币</label>
  <select class="currency-selector" aria-labelledby="currency-selector-label">
    
      <option value="AED">AED</option>
    
      <option value="ARS">ARS</option>
    
      <option value="AUD">AUD</option>
    
      <option value="BGN">BGN</option>
    
      <option value="BRL">BRL</option>
    
      <option value="CAD">CAD</option>
    
      <option value="CHF">CHF</option>
    
      <option value="CNY" selected="">CNY</option>
    
      <option value="CRC">CRC</option>
    
      <option value="CZK">CZK</option>
    
      <option value="DKK">DKK</option>
    
      <option value="EUR">EUR</option>
    
      <option value="GBP">GBP</option>
    
      <option value="HKD">HKD</option>
    
      <option value="HRK">HRK</option>
    
      <option value="HUF">HUF</option>
    
      <option value="IDR">IDR</option>
    
      <option value="ILS">ILS</option>
    
      <option value="INR">INR</option>
    
      <option value="JPY">JPY</option>
    
      <option value="KRW">KRW</option>
    
      <option value="MAD">MAD</option>
    
      <option value="MXN">MXN</option>
    
      <option value="MYR">MYR</option>
    
      <option value="NOK">NOK</option>
    
      <option value="NZD">NZD</option>
    
      <option value="PEN">PEN</option>
    
      <option value="PHP">PHP</option>
    
      <option value="PLN">PLN</option>
    
      <option value="RON">RON</option>
    
      <option value="RUB">RUB</option>
    
      <option value="SEK">SEK</option>
    
      <option value="SGD">SGD</option>
    
      <option value="THB">THB</option>
    
      <option value="TRY">TRY</option>
    
      <option value="TWD">TWD</option>
    
      <option value="UAH">UAH</option>
    
      <option value="USD">USD</option>
    
      <option value="VND">VND</option>
    
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

