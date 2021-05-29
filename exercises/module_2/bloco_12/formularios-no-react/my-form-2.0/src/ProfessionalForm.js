import React, { Component } from 'react';

export default class ProfessionalForm extends Component {
  render() {
    const { handleAction } = this.props;
    return (
      <div>
        <fieldset>
          <label>
            Resumo do Currículo:
            <div>
              <textarea onChange={handleAction} name="cvResume" maxLength="1000" />
            </div>
          </label>
          <label>
            Cargo:
            <div>
              <textarea onChange={handleAction} name="jobRole" />
            </div>
          </label>
          <label>
            Descrição do cargo:
            <div>
              <textarea onChange={handleAction} type="textarea" name="jobDescription" />
            </div>
          </label>
        </fieldset>
      </div>
    );
  }
}
