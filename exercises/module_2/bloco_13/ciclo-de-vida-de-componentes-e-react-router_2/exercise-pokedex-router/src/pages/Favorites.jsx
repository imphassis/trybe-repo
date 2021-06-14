import React, { Component } from 'react';
import Pokemon from '../components/Pokemon.js';
export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.favoritePokes = this.favoritePokes.bind(this);
  }

  componentDidMount() {
    const { bookmarked } = this.props;
    const favoriteList = [];
    Object.entries(bookmarked).forEach((el) => {
      if (el[1]) {
        return favoriteList.push(Number([el[0]]));
      }
    });
    this.setState({ favoriteList });
  }

  favoritePokes = () => {
    const { pokemons } = this.props;
    const favoriteObj = [];
    this.state.favoriteList.forEach((el) => {
      favoriteObj.push(...pokemons.filter((p) => p.id === el));
    });
    return favoriteObj.map((el) => {
      return <Pokemon pokemon={el} bookmarked={true} />;
    });
  };

  render() {
    const { bookmarked } = this.props;
    const loading = () => {
      return <span>Loading</span>;
    };
    if (!this.state.favoriteList) {
      return loading;
    } else {
      return <div className="favoritePokes">{this.favoritePokes()}</div>;
    }
  }
}
