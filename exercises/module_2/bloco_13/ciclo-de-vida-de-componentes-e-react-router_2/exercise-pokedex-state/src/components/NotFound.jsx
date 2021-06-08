import React, { Component } from 'react';
import { Image, Row } from 'react-bootstrap';
import Home from './Home';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Home />
        <h1>Ops... this page doesn't exist!</h1>
        <div className="text-center">
          <Image
            fluid
            width="400px"
            height="300px"
            src="https://i.pinimg.com/originals/c6/c6/2e/c6c62e7db88003635b5c0afdea2d66ed.jpg"
          />
        </div>
      </div>
    );
  }
}
