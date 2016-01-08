import React, { PropTypes, Component } from 'react'
import languages from './_languages';

export default class LanguageSelect extends Component {
  /*static defaultProps = {
    value: 'en'
  }
  static propTypes = {
    value: React.PropTypes.string.isRequired
  }*/

  _changeLanguage (evt) {
    let val = evt.target.value;
    console.log ("change language to "+ val);
    var {changeLanguage, ...others} = this.props;
    if (changeLanguage) changeLanguage(val);
  }
  getOptions () {
    return languages.map(function(item, index){
      var ret = null;
      for (var key in item) {
        var ret2 = (<option value={key}>{item[key]}</option>);
        //console.log ("key="+key+",ret2="+JSON.stringify(ret2));
        if (ret) ret += ret2;
        else ret = ret2;
      }
      return ret; 
    });
  
  }
  render() {
    return (
      <select {...this.props} onChange={this._changeLanguage.bind(this)}>
        {this.getOptions()}
      </select>
    );
  }

}

LanguageSelect.defaultProps = {value: 'en'};
