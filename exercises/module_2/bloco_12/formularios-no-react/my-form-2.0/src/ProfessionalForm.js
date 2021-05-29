import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
export default class ProfessionalForm extends Component {
  render() {
    const { handleAction } = this.props;
    return (
      <Form>
        <fieldset>
          <Form.Group>
            <Form.Label>
              Resumo do Currículo:
              <Form.Control
                as="textarea"
                onChange={handleAction}
                name="cvResume"
                maxLength="1000"
              />
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Cargo:
              <Form.Control as="textarea" onChange={handleAction} name="jobRole" />
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Descrição do cargo:
              <Form.Control
                as="textarea"
                onChange={handleAction}
                type="Form.Control as='textarea'"
                name="jobDescription"
              />
            </Form.Label>
          </Form.Group>
        </fieldset>
      </Form>
    );
  }
}
