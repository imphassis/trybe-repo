import React from 'react';
import Pokemon from './Pokemon';
import './PokeStyle.css';
import Button from './button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeIndex: 0,
      pokeType: 'Fire',
    };

    this.changePokemonPlus = this.changePokemonPlus.bind(this);
    this.restartIndex = this.restartIndex.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    this.ChangeType = this.ChangeType.bind(this);
    this.resetIndex = this.resetIndex.bind(this);
  }

  filterFunction = () =>
    this.props.pokemons.filter((pokemon) => pokemon.type.includes(this.state.pokeType));

  restartIndex = () => {
    if (this.filterFunction().length === this.state.pokeIndex + 1) {
      return this.setState((current) => {
        current.pokeIndex = 0;
      });
    }
  };

  resetIndex = () => this.setState((current) => (current.pokeIndex = 0));

  ChangeType = (element) => {
    console.log(this.state.pokeElements);
    this.resetIndex();
    this.setState((first) => {
      first.pokeType = element;
    });
  };

  changePokemonPlus = () => {
    this.setState((current) => ({
      pokeIndex: current.pokeIndex + 1,
    }));
    this.restartIndex();
  };

  render() {
    const pokeElements = this.props.pokemons.map((el) => el.type);
    const uniqueElements = [...new Set(pokeElements)];
    const obj = {
      Poison: 'success',
      Psychic: 'info',
      Normal: 'secondary',
      Fire: 'danger',
      Electric: 'warning',
      Dragon: 'dark',
      Bug: 'outline-success',
    };
    return (
      <>
        <div className="pokedex">
          <Pokemon pokemon={this.filterFunction()[this.state.pokeIndex]} />
        </div>
        <div className="btns">
          <Button variant="success" click={this.changePokemonPlus} name={'Next'} />
          {uniqueElements.map((el) => (
            <Button variant={obj[el]} click={() => this.ChangeType(el)} name={el} key={el}></Button>
          ))}
          <Button variant="light" click={() => this.ChangeType('')} name={'All'} />
        </div>
      </>
    );
  }
}

export default Pokedex;
