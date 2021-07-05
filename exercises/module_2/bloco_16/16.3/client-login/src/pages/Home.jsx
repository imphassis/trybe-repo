import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Button className="m-3" href="/login">
        Click to Login
      </Button>
      <Button variant="info" href="/clients">
        Click to Client Page
      </Button>
    </div>
  );
}
