import React, { PropTypes, Component } from 'react'
import currency from './_currency';

export default class CurrencySelect extends Component {
  getOptions () {
    let current = this.props.current;
    return currency.map(function(item, index){
      var ret = null;
      for (var key in item) {
        var ret2;
        if (key == current)
          ret2 = (<option value={key} selected>{item[key]}</option>);
        else
          ret2 = (<option value={key}>{item[key]}</option>);
        if (ret) ret += ret2;
        else ret = ret2;
      }
      return ret; 
    });
  
  }
  render() {
    return (
      <select {...this.props}>
        {this.getOptions()}
      </select>
    );
  }

}

CurrencySelect.defaultProps = {current: 'USD'};
