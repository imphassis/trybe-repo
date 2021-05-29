import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

export default class Form extends Component {
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
      submitted: false,
    };

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  sendForm = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div>
        <PersonalForm handleAction={this.handleAction} />
        <ProfessionalForm handleAction={this.handleAction} />
      </div>
    );
  }
}
