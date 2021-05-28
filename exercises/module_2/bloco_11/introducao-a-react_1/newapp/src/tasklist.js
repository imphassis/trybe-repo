import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    return <li className="App">{this.props.value}</li>;
  }
}
