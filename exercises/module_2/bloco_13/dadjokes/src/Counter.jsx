import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('construtor');
    this.newFunction = this.newFunction.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate => ${this.state.counter} ${nextState.counter}`);
    return true;
  }
  newFunction = () => {
    return 'teste';
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState);
    this.newFunction = () => {
      return 'mounted';
    };
  }

  render() {
    console.log('render');
    return (
      <div>
        <p>Contador</p>
        <button onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        {this.newFunction()}
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
