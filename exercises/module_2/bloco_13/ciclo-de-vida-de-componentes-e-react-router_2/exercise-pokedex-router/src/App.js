import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';
import Pokedex from './components/Pokedex';
import About from './components/About';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch className="pokedexFrame">
          <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} exact />
          <Route
            path="/pokemons/:id"
            render={(props) => <PokemonDetails {...props} pokemons={pokemons} exact />}
          />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
