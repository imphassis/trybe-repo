/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function UserForm(props) {
  // prettier-ignore
  const {
    name, email, age, onChange, imgSrc, onSubmit, refreshAPI,
  } = props;

  return (
    <Form className=" border mt-5" onSubmit={onSubmit}>
      <Form.Group controlId="form.Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={onChange}
          name="name"
        />
      </Form.Group>
      <Form.Group controlId="form.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={onChange}
          name="email"
        />
      </Form.Group>
      <Form.Group controlId="form.Age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={onChange}
          name="age"
        />
      </Form.Group>
      <Form.Group controlId="form.Age">
        <Form.Label>Image Source</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter src"
          value={imgSrc}
          onChange={onChange}
          name="imgSrc"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
