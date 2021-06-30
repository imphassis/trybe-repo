import React, { Component } from 'react';

class FormDataDisplay extends Component {
  render() {
    const { name, email, cpf, address, city, state, houseType, cvResume, jobRole, jobDescription } =
      this.props.data;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: {name}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {address}</div>
        <div> Cidade: {city}</div>
        <div> Estado: {state}</div>
        <div> Tipo de residência: {houseType}</div>
        <h3>Profissional</h3>
        <div> Currículo: {cvResume}</div>
        <div> Cargo: {jobRole}</div>
        <div> Descrição do cargo: {jobDescription}</div>
      </div>
    );
  }
}

export default FormDataDisplay;
