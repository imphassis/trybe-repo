/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Client(props) {
  // prettier-ignore
  const {
    name, email, age, imgSrc, registerClient, refreshAPI, className, rem,
  } = props;

  const showButton = (fnc, variant, text) => {
    if (fnc) {
      return (
        <Button className="m-1" onClick={fnc} variant={variant}>
          {text}
        </Button>
      );
    }
    return null;
  };

  return (
    <Card style={{ width: `${rem}rem` }} className={className}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{`e-mail: ${email}`}</Card.Text>
        <Card.Text>{` Age: ${age} years old`}</Card.Text>
        {showButton(registerClient, 'primary', 'Register Client')}
        {showButton(refreshAPI, 'success', 'Refresh')}
      </Card.Body>
    </Card>
  );
}
