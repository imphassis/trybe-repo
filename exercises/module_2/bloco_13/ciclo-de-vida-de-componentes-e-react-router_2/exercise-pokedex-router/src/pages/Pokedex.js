import React from 'react';
import Pokemon from '../components/Pokemon';
import Button from '../components/button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeIndex: 0,
      pokeType: 'Fire',
      filterIndex: true,
      bookmarked: {},
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

    const currentPokemon = this.filterFunction()[this.state.pokeIndex];
    // console.log(this.props);
    // console.log(currentPokemon);

    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={currentPokemon} bookmarked={this.props.bookmarked[currentPokemon.id]} />
        </div>
        <div className="btns">
          {uniqueElements.map((el) => (
            <Button variant={obj[el]} click={() => this.ChangeType(el)} name={el} key={el}></Button>
          ))}
          <Button variant="light" click={() => this.ChangeType('')} name={'All'} />
        </div>
        <div className="nextButton">
          <Button
            disabled={this.filterFunction().length < 2 ? true : null}
            variant="success"
            click={this.changePokemonPlus}
            name={'Next'}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;
