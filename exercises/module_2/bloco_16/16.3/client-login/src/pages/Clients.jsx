import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

export default function Clients() {
  const userInfo = useSelector((state) => state.loginReducer);
  if (!userInfo.auth) {
    return (
      <Container>
        <h1 className="m-5">User not logged in</h1>
        <Button className="m-3" href="/login">
          Click to Login
        </Button>
      </Container>
    );
  }

  return (
    <div>
      <Button variant="info" href="/register">
        Register new clients
      </Button>
    </div>
  );
}
