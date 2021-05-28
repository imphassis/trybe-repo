import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import './PokeStyle.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pokedexFrame">
          <h1> Pokedex </h1>
          <Pokedex pokemons={pokemons} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
