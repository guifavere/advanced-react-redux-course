import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  onSubmit = (formProps) => {
    console.log({ formProps });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field autoComplete="none" name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field autoComplete="none" name="password" type="password" component="input" />
        </fieldset>
        <button type="submit">Sign up</button>
      </form>
    );
  };
};

export default reduxForm({ form: 'signup' })(Signup);
