import React, { Component } from 'react';
import Input from './Input';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',
      cvResume: '',
      jobRole: '',
      jobDescription: '',
    };

    this.handleAction = this.handleAction.bind(this);
  }
  handleAction = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <fieldset>
        <form>
          <label>
            Nome:
            <Input
              value={this.state.name}
              onChange={this.handleAction}
              name="name"
              type="text"
              placeholder="ex: João da Silva"
            />
          </label>
          <label>
            E-mail:
            <Input
              value={this.state.email}
              onChange={this.handleAction}
              name="email"
              type="email"
              placeholder="joaodasilva@email.com"
            />
          </label>
          <label>
            CPF:
            <Input
              value={this.state.cpf}
              onChange={this.handleAction}
              name="cpf"
              type="text"
              placeholder="Somente números"
            />
          </label>
          <label>
            Endereço:
            {/* prettier-ignore */}
            <Input value={this.state.address} onChange={this.handleAction} name="address" type="text" />
          </label>
          <label>
            Cidade:
            {/* prettier-ignore */}
            <Input value={this.state.city} onChange={this.handleAction} name="city" type="text" />
          </label>
          <div>
            <label>
              Estado:
              {/* prettier-ignore */}
              <select value={this.state.state} onChange={this.handleAction} name="state" type="text">
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            </label>
          </div>

          <label>
            Tipo de casa:
            {/* prettier-ignore */}
            <Input value={this.state.houseType} onChange={this.handleAction} name="houseType" type="text" />
          </label>
        </form>
      </fieldset>
    );
  }
}
