import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default class Pokemon extends React.Component {
  disabledButton = () => {
    if (this.filterFunction().length < 2) {
      document.querySelector('.nextButton').setAttribute('class', 'disabled');
    }
  };

  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    const { bookmarked } = this.props;
    const isBookmarked = bookmarked ? true : false;

    return (
      <Card bg="light" border="dark" className="text-center card singlePoke">
        <Card.Header>
          <Card.Title>
            {name} |Favorite:
            {`${isBookmarked}`}
          </Card.Title>
        </Card.Header>
        <Card.Img variant="bottom" src={image} alt={`${name} sprite`} />
        <Card.Body className="text-center">
          <Card.Text className="fw-bold display-6"> {type} </Card.Text>
          <Link to={`pokemons/${id}`}>More Details</Link>
        </Card.Body>
        <Card.Footer>
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </Card.Footer>
      </Card>
    );
  }
}
