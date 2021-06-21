import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DadJoke from './DadJokes';
import Random from './Random';
import PersonDetails from './personDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PersonDetails /> */}
        <Random />
      </div>
    );
  }
}
