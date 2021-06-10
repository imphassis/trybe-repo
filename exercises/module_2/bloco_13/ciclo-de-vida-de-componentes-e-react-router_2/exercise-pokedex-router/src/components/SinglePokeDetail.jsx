import React, { Component } from 'react';
import { Row, Container, Figure, Col, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class singlePokeDetail extends Component {
  render() {
    const { name, type, averageWeight, image, summary, foundAt } = this.props.pokemon;
    const { onChange, checked } = this.props;

    return (
      <Container>
        <Card className="text-center">
          <Card.Header>{name} Details</Card.Header>
          <Figure>
            <Figure.Image
              width={250}
              height={300}
              variant="bottom"
              src={image}
              alt={`${name} sprite`}
            />
            <Card.Text>
              {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
              <br />
              Type: {type}
            </Card.Text>
            <Card.Title>
              <h2>Summary</h2>
            </Card.Title>
            <Card.Text className="m-3">{summary}</Card.Text>
          </Figure>
        </Card>
        <Figure className="figureDiv">
          <h3 className="text-center">Game Locations for {name}</h3>
          <Row>
            {foundAt.map((el) => {
              return (
                <Col key={el.location}>
                  <Figure.Image
                    width={250}
                    height={300}
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
          <Form.Check
            onChange={onChange}
            type="checkbox"
            inline
            label="Pokemon Favorito"
            checked={checked}
          />
        </Form>
      </Container>
    );
  }
}
