import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <span>
          <Link to="/users/10">Users</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/strict-access">StrictAccess</Link>
        </span>
      </div>
    );
  }
}

export default Home;
