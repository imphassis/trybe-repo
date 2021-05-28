import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import './App.css';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="title">Pokedex</h1>
        <CardDeck className="deck">
          <Pokedex />
        </CardDeck>
      </Container>
    );
  }
}

export default App;
