import React, { Component } from 'react';
import { Row, Container, Figure, Col, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class singlePokeDetail extends Component {
  render() {
    const { name, type, averageWeight, image, id, sumary, summary, foundAt } = this.props.pokemon;
    const { onChange } = this.props;

    return (
      <Container>
        <Card className="text-center">
          <Card.Header>{name} Details</Card.Header>
          <Card.Title></Card.Title>
          <Figure>
            <Figure.Image
              width={250}
              height={300}
              alt="171x180"
              variant="bottom"
              src={image}
              alt={`${name} sprite`}
            />
            <Card.Text>
              {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
              <div>Type: {type}</div>
            </Card.Text>
            <Card.Text className="m-3">
              <h2>Sumary</h2>
              {summary}
            </Card.Text>
          </Figure>
        </Card>
        <Figure className="figureDiv">
          <h3 className="text-center">Game Locations for {name}</h3>

          <Row>
            {foundAt.map((el) => {
              return (
                <Col>
                  <Figure.Image
                    width={250}
                    height={300}
                    alt="171x180"
                    variant="bottom"
                    src={el.map}
                    alt={` sprite`}
                  />
                  <Figure.Caption className="text-center">{el.location}</Figure.Caption>
                </Col>
              );
            })}
          </Row>
        </Figure>
        <Form className="text-center">
          <Form.Check onChange={onChange} type="checkbox" inline label="Pokemon Favorito" />
        </Form>
      </Container>
    );
  }
}
