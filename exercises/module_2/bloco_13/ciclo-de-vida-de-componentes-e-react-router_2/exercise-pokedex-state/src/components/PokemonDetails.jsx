import React, { Component } from 'react';
import Home from './Home';
import SinglePokeDetail from './SinglePokeDetail';

export default class PokemonDetails extends Component {
  constructor() {
    super();

    this.state = {};
    this.findPokemonId = this.findPokemonId.bind(this);
  }

  findPokemonId = (id) => {
    const { pokemons } = this.props;
    return pokemons.find((el) => el.id === parseInt(id));
  };

  render() {
    const identifier = this.props.match.params.id;
    const pokemon = this.findPokemonId(identifier);

    return (
      <div>
        <Home />
        <div className="pokedex ">
          <SinglePokeDetail pokemon={pokemon} onChange="" />
        </div>
      </div>
    );
  }
}
