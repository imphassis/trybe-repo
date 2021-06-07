import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Personal extends Component {
  render() {
    const { email, name, cell, picture, dob } = this.props.person;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture.large} alt="" />
        <Card.Body>
          <Card.Title>
            {name.title} {name.first} {name.last}
          </Card.Title>
          <ListGroup>
            <ListGroupItem>E-mail: {email}</ListGroupItem>
            <ListGroupItem>Age: {dob.age}</ListGroupItem>
            <ListGroupItem>cell: {cell}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
