/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sendInfo } from '../App/actions';

function Login(props) {
  // const { sendInformation } = props;
  const userInfo = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (userInfo.auth) {
      props.history.push('/clients');
    }
  });

  const [input, setInput] = useState({ email: '', password: '', auth: false });

  const handleInput = ({ target }) => {
    const { type } = target;
    setInput({ ...input, [type]: target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendInformation(input);
    dispatch(sendInfo(input));
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={input.email}
          onChange={(e) => handleInput(e)}
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => handleInput(e)}
          value={input.password}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
