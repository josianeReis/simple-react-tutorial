import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="container" tabIndex="0">
       {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType(PropTypes.array, PropTypes.string, PropTypes.element),
  className: PropTypes.string,
};

Card.defaultProps = {
  children: {},
  className: '',
};
