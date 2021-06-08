import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> Pokedex </Navbar.Brand>
        <div className="navbar justify-content-center">
          <LinkContainer to="/" className="m-1">
            <Nav.Link>Home</Nav.Link>
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
