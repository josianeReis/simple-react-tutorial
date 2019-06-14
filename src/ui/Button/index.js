import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './button.css';

class Button extends PureComponent {
  render(){
    return (
      <button
        {...this.props}
        className={`custom-button ${this.props.className}`}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType(PropTypes.array, PropTypes.string, PropTypes.element),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: {},
  className: '',
};


export default Button;