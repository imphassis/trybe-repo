import React, { Component } from 'react';

export class Textarea extends Component {
  render() {
    const { action, value, name, pholder } = this.props;

    return (
      <>
        <textarea value={value} onChange={action} type="text" name={name} placeholder={pholder} />
      </>
    );
  }
}

export default Textarea;
