import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (event) => {
    this.props.parentCallback('teste');
    this.setState({ id: !this.state.id });
  };

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} onChange={this.handleChange} />
      </div>
    );
  }
}
