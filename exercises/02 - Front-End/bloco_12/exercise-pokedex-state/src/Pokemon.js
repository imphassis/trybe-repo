import React from 'react';
import Card from 'react-bootstrap/Card';
import './PokeStyle.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <Card bg="light" border="dark" className="text-center">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Img variant="bottom" src={image} alt={`${name} sprite`} />
        <Card.Body className="text-center">
          <Card.Text> {type} </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </Card.Footer>
      </Card>
    );
  }
}

export default Pokemon;
