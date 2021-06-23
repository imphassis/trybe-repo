import React, { Component } from 'react';
import './App.css';
import Button from './Button';

export default class Api extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      loading: true,
    };
    this.fetchImage = this.fetchImage.bind(this);
    this.searchNext = this.searchNext.bind(this);
  }

  fetchImage = async () => {
    this.setState({ loading: true }, async () => {
      const dogImage = await fetch('https://dog.ceo/api/breeds/image/random');
      const parseJson = await dogImage.json();
      this.setState({ message: parseJson.message });
      this.setState({ loading: false });
    });
  };

  componentDidMount() {
    this.fetchImage();
  }

  imageHeader = (src) => {
    return <img className="container" src={src} alt="" />;
  };

  searchNext = () => {
    this.fetchImage();
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('dog', prevState.message);
    const dogBread = prevState.message.split('/')[4];
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  render() {
    localStorage.dog = [];
    const loadMessage = 'Loading...';
    const { loading, message } = this.state;
    return (
      <div>
        <div>
          <div className="container">{loading ? loadMessage : this.imageHeader(message)}</div>
        </div>
        <Button onClick={this.searchNext} />
      </div>
    );
  }
}
