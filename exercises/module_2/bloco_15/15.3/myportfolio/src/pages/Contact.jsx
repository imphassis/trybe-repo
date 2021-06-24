import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.printResulter = this.printResulter.bind(this);
  }

  handleSubmit = (el) => {
    el.preventDefault();
    const data = new FormData(el.target);
    const objData = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    };
    this.setState({ objData });
  };

  printResulter = () => {
    const { objData } = this.state;

    if (objData) {
      const { name, email, subject, message } = objData;

      return (
        <div className="m-5">
          <h1>Message sent sucessfully!</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <section>
          <h2>Contact Us</h2>
          <Form className="m-3" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control name="subject" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your message</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {this.printResulter()}
        </section>
      </div>
    );
  }
}
