import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <Card bg="light" style={{ width: '18rem' }} className="pokediv">
        <Card.Header className="poke-Name">{name}</Card.Header>
        <Card.Img variant="top" src={image} alt={this.props.pokemon.name} />
        <Card.Body className="poke-specs">
          <Card.Footer>
            <Card.Text> {type}</Card.Text>
            <Card.Text>
              Average Weight: {averageWeight.value} {averageWeight.measurementUnit}
            </Card.Text>
          </Card.Footer>
        </Card.Body>
      </Card>
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
