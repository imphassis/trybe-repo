import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import Pokedex from './pages/Pokedex';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: {},
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Home />
        <Switch className="pokedexFrame">
          <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} exact />
          <Route
            path="/pokedex"
            render={(props) => <Pokedex {...props} pokemons={pokemons} />}
            exact
          />
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
