import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
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
        <div>{this.props.errorMessage}</div>
        <button type="submit">Sign up</button>
      </form>
    );
  };
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
