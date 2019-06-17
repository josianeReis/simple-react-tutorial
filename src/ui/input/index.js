import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input.css';

class InputText extends Component {
  state = { value: '' }

  inputAction = (e) => {
    e.persist();
    this.setState(this.props.onInput(e));
  }

  render() {
    const {
      name,
      type,
      placeholder,
    } = this.props;

    return (
      <div className="input-container">
        <input
          type={type}
          name={name}
          onInput={this.inputAction}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  onInput: () => { },
  placeholder: '',
};

export default InputText;