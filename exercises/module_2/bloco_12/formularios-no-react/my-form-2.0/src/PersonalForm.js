import React, { Component } from 'react';
import states from './estados';

export default class PersonalForm extends Component {
  render() {
    const { handleAction } = this.props;

    return (
      <div>
        <fieldset>
          <div>
            <label>
              Nome:
              <input
                onChange={handleAction}
                name="name"
                type="text"
                placeholder="ex: João da Silva"
              />
            </label>
          </div>
          <div>
            <label>
              E-mail:
              <input
                onChange={handleAction}
                name="email"
                type="email"
                placeholder="joaodasilva@email.com"
              />
            </label>
          </div>
          <label>
            CPF:
            <input onChange={handleAction} name="cpf" type="text" placeholder="Somente números" />
          </label>
          <div>
            <label>
              Endereço:
              <input onChange={handleAction} name="address" type="text" />
            </label>
          </div>
          <label>
            Cidade:
            <input onChange={handleAction} name="city" type="text" />
          </label>
          <div>
            <label>
              Estado:
              <div>
                <select onChange={handleAction} name="state" type="text">
                  {states.map((el) => (
                    <option value={Object.keys(el)} key={Object.keys(el)}>
                      {Object.values(el)}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>
          <label>Tipo de Residência:</label>
          <div className="radio">
            <label>
              <input type="radio" onChange={handleAction} name="houseType" value="House" /> Casa
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" onChange={handleAction} name="houseType" value="Apartment" />{' '}
              Apartamento
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}
