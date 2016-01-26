import React, { PropTypes, Component } from 'react'

export default class ResponsiveImage extends Component {
  render() {
    return (
      <div className="responsive-img-wrapper">
        <img src={this.props.imgurl} className="responsive-imgwh" />
      </div>
    );
  }
}


