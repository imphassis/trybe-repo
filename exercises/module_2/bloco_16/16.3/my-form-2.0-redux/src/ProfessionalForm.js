import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
export default class ProfessionalForm extends Component {
  render() {
    const { handleAction } = this.props;
    return (
      <Form.Group>
        <Form.Group>
          <Form.Label>
            Resumo do Currículo:
            <Form.Control maxLength="1000" as="textarea" onChange={handleAction} name="cvResume" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Cargo:
            <Form.Control maxLength="40" as="textarea" onChange={handleAction} name="jobRole" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Descrição do cargo:
            <Form.Control
              maxLength="1000"
              as="textarea"
              onChange={handleAction}
              type="Form.Control as='textarea'"
              name="jobDescription"
            />
          </Form.Label>
        </Form.Group>
      </Form.Group>
    );
  }
}
