import React, { Component } from 'react';
import states from './estados';
import Form from 'react-bootstrap/Form';

export default class PersonalForm extends Component {
  render() {
    const { handleAction } = this.props;
    const { name, email, cpf, address, city, state, houseType } = this.props.data;
    return (
      <Form.Group>
        <Form.Group>
          <Form.Label>
            Nome:
            <Form.Control
              value={name}
              required
              maxLength="40"
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
              maxLength="50"
              value={email}
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
            maxLength="11"
            value={cpf}
            onChange={handleAction}
            name="cpf"
            type="text"
            placeholder="Somente números"
          />
        </Form.Label>
        <Form.Group>
          <Form.Label>
            Endereço:
            <Form.Control
              value={address}
              maxLength="200"
              onChange={handleAction}
              name="address"
              type="text"
            />
          </Form.Label>
        </Form.Group>
        <Form.Label>
          Cidade:
          <Form.Control
            value={city}
            maxLength="28"
            onChange={handleAction}
            name="city"
            type="text"
          />
        </Form.Label>
        <Form.Group>
          <Form.Label>
            Estado:
            <Form.Group>
              <Form.Control
                value={state}
                as="select"
                onChange={handleAction}
                name="state"
                type="text"
              >
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
          <Form.Check
            checked={houseType === 'House'}
            inline
            label="Casa"
            type="radio"
            onChange={handleAction}
            name="houseType"
            value="House"
          />
        </Form.Group>
        <Form.Group className="radio">
          <Form.Label>
            <Form.Check
              checked={houseType === 'Apartment'}
              inline
              label="Apartamento"
              type="radio"
              onChange={handleAction}
              name="houseType"
              value="Apartment"
            />
          </Form.Label>
        </Form.Group>
      </Form.Group>
    );
  }
}
