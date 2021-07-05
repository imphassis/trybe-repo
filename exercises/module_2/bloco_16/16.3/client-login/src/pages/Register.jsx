/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { UserForm, Client } from '../components';
import API from '../services/API';
import { registerUser } from '../App/actions';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const [user, setUser] = useState('');
  const [reg, setReg] = useState('');
  const dispatch = useDispatch();
  const registered = useSelector((state) => state.registerReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newUser = {
      name: { title: '', first: data.get('name'), last: '' },
      email: data.get('email'),
      dob: { age: data.get('age') },
      picture: { large: data.get('imgSrc') },
    };

    dispatch(registerUser(newUser));
  };

  const refreshUser = async () => {
    const newUser = await API();
    setUser(...newUser);
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({ ...form, [name]: value });
  };

  const registerToState = () => setReg(registered);

  const handleAddUser = () => {
    dispatch(registerUser(user));
    refreshUser();
  };

  const randomClient = () => {
    if (user) {
      const { name, email, dob, picture } = user;
      const { title, first, last } = name;
      const randomUserName = `${title} ${first} ${last}`;

      return (
        <Client
          rem="35"
          name={randomUserName}
          email={email}
          age={dob.age}
          imgSrc={picture.large}
          refreshAPI={() => refreshUser()}
          registerClient={() => handleAddUser()}
        />
      );
    }
  };

  const formReturner = () => {
    const { name, email, age } = form;
    return (
      <UserForm
        onChange={(e) => {
          handleChange(e);
        }}
        name={name}
        email={email}
        age={age}
        onSubmit={(e) => handleSubmit(e)}
      />
    );
  };

  // prettier-ignore
  const getRegistered = () => {
    if (reg) {
      return reg.map((el) => {
        const { name, email, dob, picture } = el;
        const { title, first, last } = name;
        const randomUserName = `${title} ${first} ${last}`;
        return (
      <Client
        className="m-2"
        name={randomUserName}
        email={email}
        age={dob.age}
        imgSrc={picture.large}

      />
        );
      });
    }
  };

  useEffect(() => {
    if (!user) {
      return refreshUser();
    }
    registerToState();
  });

  if (!registered.auth) {
    return (
      <Container className="m-5">
        <h1>User Not logged in</h1>
        <Button className="m-3" href="/login">
          Click to Login
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <h4>Cadastre um novo cliente:</h4>
          {randomClient()}
        </Col>
        <Col>
          <h4>Ou digite manualmente:</h4>
          {formReturner()}
        </Col>
      </Row>
      <section>
        Clientes cadastrados:
        <Row className="m-5">{getRegistered()}</Row>
      </section>
    </Container>
  );
}
