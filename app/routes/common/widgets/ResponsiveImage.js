import React, { PropTypes, Component } from 'react'

export default class ResponsiveImage extends Component {
  render() {
    var imgClass = this.props.imgClass || "responsive-imgwh";
    return (
      <div className="responsive-img-wrapper">
        <img src={this.props.imgUrl} className={imgClass} />
      </div>
    );
  }
}


