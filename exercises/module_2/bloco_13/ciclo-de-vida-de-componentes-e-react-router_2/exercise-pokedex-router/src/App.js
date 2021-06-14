import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import Pokedex from './pages/Pokedex';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: {
        4: true,
        7: false,
        23: true,
        148: true,
      },
    };
    this.getData = this.getData.bind(this);
  }

  getData(val) {
    const idValue = { ...this.state.bookmarked };
    const { id, value } = val;
    idValue[id] = value;
    this.setState({ bookmarked: { ...idValue } });
  }

  render() {
    return (
      <BrowserRouter>
        <Home />
        <Switch className="pokedexFrame">
          <Route
            path="/"
            render={(props) => (
              <Pokedex {...props} bookmarked={this.state.bookmarked} pokemons={pokemons} />
            )}
            exact
          />
          {/* prettier-ignore */}
          <Route path="/pokedex" render={(props) => (<Pokedex {...props} pokemons={pokemons} bookmarked={this.state.bookmarked} />)} exact/>
          {/* prettier-ignore */}
          <Route path="/pokemons/:id" render={(props) => (<PokemonDetails {...props} pokemons={pokemons} bookmarked={this.state.bookmarked} sendData = {this.getData} exact /> )}
          />
          {/* prettier-ignore */}
          <Route path="/favorites" render={(props) => (<Favorites {...props} pokemons={pokemons} bookmarked={this.state.bookmarked}  exact /> )} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
