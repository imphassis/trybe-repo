import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Navbar fixed="top" size="lg" bg="light" sticky="top">
        <Navbar.Brand> Pokedex </Navbar.Brand>
        <div className="navbar justify-content-center">
          <LinkContainer to="/" className="m-1">
            <Nav.Link to="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" className="m-1">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favorites" className="m-1">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
        </div>
      </Navbar>
    );
  }
}
