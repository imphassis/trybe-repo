// arquivo Users.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Users extends Component {
  render() {
    const { greetingsMessage, match } = this.props;
    const { id } = match.params;
    return (
      <div>
        <h2>{id}</h2>
        <p>
          {greetingsMessage}, My awesome {id} component{' '}
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Users;
