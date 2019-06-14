import React, { Component} from 'react'
import Card from '../ui/card/';
import Button from '../ui/Button';
import Input from '../ui/input';

import './home.css'

class Home extends Component {
  state={
    name: '',
    listNames: [],
  }

  handleName = (ev) =>{
    this.setState({ name: ev.target.value });
  }

  handleListNames = () => {
    return this.setState({ listNames: [...this.state.listNames, this.state.name] })
  }

  render() {
    return (
      <div>
        <Card>
          <div className="input-data">
            <Input
              onInput={this.handleName}
            />
            <Button
              onClick={this.handleListNames}
            >
              Incluir Nome
            </Button>
          </div>
          <div>
            {this.state.listNames.map(el => <p>{el}</p>)}
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;