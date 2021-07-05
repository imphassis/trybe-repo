import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import Button from 'react-bootstrap/Button';
import FormDataDisplay from './FormData';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { sendForm } from './actions';

class FullForm extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  handleClean = () => {
    this.setState({
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
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.sendForm({ submitted: true });
  };

  handleAction = ({ target }) => {
    const { name, value } = target;
    this.props.sendForm({ [name]: value });
  };

  sendForm = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <PersonalForm handleAction={this.handleAction} data={this.props.form} />
          <ProfessionalForm handleAction={this.handleAction} />
          <Button type="submit">Submit</Button>{' '}
          <Button variant="danger" onClick={this.handleClean}>
            Clean
          </Button>
        </Form>
        {this.props.form.submitted && <FormDataDisplay data={this.props.form} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.formReducer.form,
});

const mapDispatchToProps = (dispatch) => ({
  sendForm: (payload) => dispatch(sendForm(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullForm);
