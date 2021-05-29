import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { onChange, type, name, placeholder, value } = this.props;

    return (
      <div>
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
