import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="m-3 text-center" fluid>
          <h1>About Pokedex</h1>
          <h5>
            This application simulates a Pokédex, a digital enciclopedia containing all Pokémons .
          </h5>
          <h5>One can filter Pokémons by type, and see more details for each one of them.</h5>
          <Image
            width={250}
            height={300}
            src="https://cdn2.bulbagarden.net/upload/thumb/3/36/479Rotom-Pok%C3%A9dex.png/1200px-479Rotom-Pok%C3%A9dex.png"
          />
        </Jumbotron>
      </div>
    );
  }
}
