import React, {
  Component
} from 'react';
import './input.css';

class Input extends Component {
  state = {
  }

  inputAction = (e) => {
    e.persist();
    this.setState(() => this.props.onInput(e));
  }

  render() {
    const {
      containerClass,
    } = this.props;

    return (
      <div className={`input-container ${containerClass}`}>
        <input
          required
          name="name"
          placeholder="Nome"
          value={this.state.name}
          className="input-class"
          onInput={this.inputAction}
        />
      </div>
    );
  }
}

export default Input;