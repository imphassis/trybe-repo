import React, { Component } from 'react';

export class input extends Component {
  render() {
    const { action, value, name, pholder } = this.props;

    return (
      <>
        <input value={value} onChange={action} type="text" name={name} placeholder={pholder} />
      </>
    );
  }
}

export default input;
