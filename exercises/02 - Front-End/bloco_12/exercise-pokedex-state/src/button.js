import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class button extends Component {
  render() {
    return (
      <Button variant={this.props.variant} onClick={this.props.click}>
        {this.props.name}
      </Button>
    );
  }
}
