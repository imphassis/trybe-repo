import React, { Component } from 'react';
import states from './estados';
import Form from 'react-bootstrap/Form';

export default class PersonalForm extends Component {
  render() {
    const { handleAction } = this.props;

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>
              Nome:
              <Form.Control
                type="text"
                onChange={handleAction}
                name="name"
                placeholder="ex: João da Silva"
              />
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              E-mail:
              <Form.Control
                onChange={handleAction}
                name="email"
                type="email"
                placeholder="joaodasilva@email.com"
              />
            </Form.Label>
          </Form.Group>
          <Form.Label>
            CPF:
            <Form.Control
              onChange={handleAction}
              name="cpf"
              type="text"
              placeholder="Somente números"
            />
          </Form.Label>
          <Form.Group>
            <Form.Label>
              Endereço:
              <Form.Control onChange={handleAction} name="address" type="text" />
            </Form.Label>
          </Form.Group>
          <Form.Label>
            Cidade:
            <Form.Control onChange={handleAction} name="city" type="text" />
          </Form.Label>
          <Form.Group>
            <Form.Label>
              Estado:
              <Form.Group>
                <Form.Control as="select" onChange={handleAction} name="state" type="text">
                  {states.map((el) => (
                    <option value={Object.keys(el)} key={Object.keys(el)}>
                      {Object.values(el)}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Label>
          </Form.Group>
          <Form.Label>Tipo de Residência:</Form.Label>
          <Form.Group className="radio">
            <Form.Label>
              <Form.Control type="radio" onChange={handleAction} name="houseType" value="House" />{' '}
              Casa
            </Form.Label>
          </Form.Group>
          <Form.Group className="radio">
            <Form.Label>
              <Form.Control
                type="radio"
                onChange={handleAction}
                name="houseType"
                value="Apartment"
              />{' '}
              Apartamento
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
