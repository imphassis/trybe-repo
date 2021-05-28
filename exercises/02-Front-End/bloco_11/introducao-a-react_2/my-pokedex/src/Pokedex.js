import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './App.css';

class Pokedex extends React.Component {
  render() {
    return data.map((el) => <Pokemon key={el.name} pokemon={el} />);
  }
}

export default Pokedex;
