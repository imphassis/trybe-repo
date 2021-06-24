import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h2>Contact Us</h2>
          <Form className="m-3">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </section>
      </div>
    );
  }
}

export default Contact;
