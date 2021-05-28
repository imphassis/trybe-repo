import React from 'react';
import Pokemon from './Pokemon';
import './PokeStyle.css';
import Button from 'react-bootstrap/Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeIndex: 0,
      pokeType: '',
    };
    this.changePokemonPlus = this.changePokemonPlus.bind(this);
    this.resetIndex = this.resetIndex.bind(this);
    this.typeFilter = this.typeFilter.bind(this);
  }

  typeFilter = () => {};

  resetIndex = () => {
    if (this.props.pokemons.length === this.state.pokeIndex + 1) {
      return this.setState((current) => {
        current.pokeIndex = 0;
      });
    }
  };
  changePokemonPlus = () => {
    this.setState((current) => ({
      pokeIndex: current.pokeIndex + 1,
    }));
    this.resetIndex();
  };
  render() {
    return (
      <>
        <div className="pokedex">
          {this.props.pokemons
            .filter((el, index, array) => index === this.state.pokeIndex)
            .map((pokemon) => (
              <Pokemon pokemon={pokemon} />
            ))}{' '}
        </div>
        <div className="btns">
          <Button variant="danger" class="btn" onClick={this.changePokemonPlus}>
            Fire
          </Button>
          <Button variant="success" class="btn" onClick={this.changePokemonPlus}>
            Next
          </Button>
          <Button variant="warning" class="btn" onClick={this.changePokemonPlus}>
            Psychic
          </Button>
          <Button variant="light" class="btn" onClick={this.changePokemonPlus}>
            Psychic
          </Button>
        </div>
      </>
    );
  }
}

export default Pokedex;
