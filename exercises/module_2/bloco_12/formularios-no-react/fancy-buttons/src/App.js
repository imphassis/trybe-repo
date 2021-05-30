import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Input from './input';
import Textarea from './textarea';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      textarea: '',
      option: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Input
            pholder="Your name"
            value={this.state.name}
            action={this.handleChange}
            type="text"
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>TextArea: </Form.Label>
          <Form.Control
            as="textarea"
            value={this.state.textarea}
            onChange={this.handleChange}
            name="textarea"
          />
        </Form.Group>
        <Form.Label>Select Option: </Form.Label>
        <Form.Control
          as="select"
          onChange={this.handleChange}
          value={this.state.option}
          value={this.state.option}
          name="option"
        >
          <option>Uva</option>
          <option value="Laranja">Laranja</option>
        </Form.Control>

        <Form.File />
      </Form>
    );
  }
}
