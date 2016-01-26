import React, { PropTypes, Component } from 'react'
import classNames from 'classnames';
import _ from 'underscore';

export default class Input extends Component {
  supportPlaceholder() {
    return "undefined" != typeof document && "placeholder" in document.createElement("input");
  }

  renderPlaceholderText() {
    var gotValue = this.props.value || this.props.initialValue || this.props.defaultValue;
    var needsPlaceholding = this.props.placeholder && !this.supportPlaceholder() && !gotValue;
    console.log ("gotValue="+gotValue+", needsPlaceholding="+needsPlaceholding);
    return (
      <span className={classNames("input-placeholder-label", {"screen-reader-only":!needsPlaceholding})}>
        {this.props.placeholder}
      </span>
    );
  }

  render() {
    var labelClass = classNames("input-placeholder-group", this.props.labelClass);
    var isTextarea = this.props.type === 'textarea';
    var inputClass = ' form-control';
    //var inputClass = this.props.className + ' form-control';
    var props = _.omit(this.props, 'labelClass', 'className');
    //var props = Object.assign({}, this.props);
    //delete props[labelClass];

    return (
      <label className={labelClass}>
        {this.renderPlaceholderText()}
        {isTextarea &&
          <textarea ref="input" {...props} className={inputClass}/>}
        {!isTextarea && 
          <input ref="input" {...props} className={inputClass}/>}
      </label>
    );
  }

}

Input.propTypes = { 
    className: PropTypes.string,
    labelClass: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any
};

Input.defaultProps = {placeholder: 'please input here:'};
