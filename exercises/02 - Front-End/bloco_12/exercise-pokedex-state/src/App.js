import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import './PokeStyle.css';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1> Pokedex </h1>
          <Pokedex pokemons={pokemons} />
        </div>
      </>
    );
  }
}

export default App;
