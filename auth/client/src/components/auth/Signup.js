import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
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

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Signup);
