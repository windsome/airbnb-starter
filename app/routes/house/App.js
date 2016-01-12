import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import Header from '../common/Header.react';
import Footer from '../common/Footer.react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="header" className="airbnb-header">
          <header className="regular-header" role="banner">
            <Header/>
          </header>
        </div>
        <main id="site-content" className="container-fluid">
          {this.props.children}
        </main>
        <div id="footer" className="container-brand-dark footer-container clearfix">
          <Footer/>
        </div>
      </div>
    );
  }
}

//export default connect()(App);
