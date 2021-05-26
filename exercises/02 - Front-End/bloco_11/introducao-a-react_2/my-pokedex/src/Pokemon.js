import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokediv">
        <div className="poke-specs">
          <p className="poke-Name">{name}</p>
          <p> {type}</p>
          <p>
            Average Weight: {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>

        <img src={image} alt={this.props.pokemon.name} />
      </div>
    );
  }
}

Pokemon.defaultProps = {
  Pokemon: {
    name: 'Stranger',
  },
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Pokemon;
