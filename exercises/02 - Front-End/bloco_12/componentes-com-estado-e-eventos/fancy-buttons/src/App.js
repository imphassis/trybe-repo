import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      color: 'red',
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor = () => {
    console.log(this.state.color);
    if (this.state.counter1 % 2 === 0) {
      this.setState((actual) => {
        actual.color = 'green';
      });
    } else {
      this.setState((actual) => (actual.color = 'red'));
    }
  };

  handleClick1 = () => {
    this.handleColor();
    this.setState((actual) => ({
      counter1: actual.counter1 + 1,
    }));
  };

  render() {
    return (
      <>
        <Button style={{ backgroundColor: [this.state.color] }} onClick={this.handleClick1}>
          {this.state.counter1}
        </Button>
      </>
    );
  }
}

export default App;
