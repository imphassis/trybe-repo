import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <h1 className="title">Pokedex</h1>
        <main>
          <Pokedex />
        </main>
      </section>
    );
  }
}

export default App;
