import React, { Component } from 'react';
import SinglePokeDetail from '../components/SinglePokeDetail';
import Child from '../components/Child';

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

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ [id]: false });
  }

  handleChange = () => {
    const { id } = this.props.match.params;
    this.setState({ [id]: !this.state[id] });
  };

  render() {
    const { id } = this.props.match.params;
    const identifier = this.props.match.params.id;
    const pokemon = this.findPokemonId(identifier);

    return (
      <div className="pokedex ">
        <SinglePokeDetail
          checked={this.state[id]}
          pokemon={pokemon}
          onChange={this.handleChange}
          data={this.props.match.params}
        />
      </div>
    );
  }
}
