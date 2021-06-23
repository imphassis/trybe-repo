import React, { Component } from 'react';
import Personal from './Personal';

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: [],
    };
    this.fetchRandom = this.fetchRandom.bind(this);
  }

  async fetchRandom() {
    this.setState(async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } };
      const requestReturn = await fetch('https://api.randomuser.me/', requestHeaders);
      const data = await requestReturn.json();
      this.setState({
        person: data.results[0],
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchRandom();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.person.dob.age) {
      console.log(nextState);
      return false;
    }
    return true;
  }

  //   showInfo = () => {
  //     return <Personal person={this.state.person} />;
  //   };

  render() {
    const loadingState = <span>Loading... please wait</span>;
    const { loading } = this.state;
    return <div>{loading ? loadingState : this.state.person.name.first}</div>;
  }
}
