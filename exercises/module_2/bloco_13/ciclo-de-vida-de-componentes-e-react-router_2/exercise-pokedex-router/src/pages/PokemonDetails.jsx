import React, { Component } from 'react';
import SinglePokeDetail from '../components/SinglePokeDetail';

export default class PokemonDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
    };

    this.findPokemonId = this.findPokemonId.bind(this);
    this.demoMethod = this.demoMethod.bind(this);
  }

  findPokemonId = (id) => {
    const { pokemons } = this.props;
    return pokemons.find((el) => el.id === parseInt(id));
  };

  demoMethod = () => {
    const { id } = this.props.match.params;
    this.setState(
      (prev) => ({ id: !prev.id }),
      () => {
        this.props.sendData({ id: id, value: this.state.id });
      }
    );
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { bookmarked } = this.props;
    const isBookmarked = bookmarked[id] ? true : false;
    this.setState({ id: isBookmarked }, () => {
      this.props.sendData({ id: id, value: this.state.id });
    });
  }

  render() {
    const { id } = this.props.match.params;
    const pokemon = this.findPokemonId(id);
    const isBookmarked = this.props.bookmarked[id] ? true : false;

    return (
      <div className="pokedex ">
        <SinglePokeDetail
          pokemon={pokemon}
          onChange={this.demoMethod}
          data={this.props.match.params}
          checked={isBookmarked}
        />
      </div>
    );
  }
}
