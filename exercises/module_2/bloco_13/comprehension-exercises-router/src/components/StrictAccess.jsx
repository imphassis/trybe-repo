import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
export default class StrictAccess extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.caller = this.caller.bind(this);
  }

  caller = () => {
    const {
      user: { username, password },
    } = this.props;
    {
      if (username === 'joao' && password === 1234) {
        return 'Welcome Joao';
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  render() {
    return (
      <div>
        <span> Strict Access, only available to authorized users</span>
        {this.caller()}
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
