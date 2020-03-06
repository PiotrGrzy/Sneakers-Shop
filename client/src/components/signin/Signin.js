import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/user/user.actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router';
import CustomButton from '../customButton/CustomButton';

import './signin.scss';

const Signin = ({ signIn, errors, history }) => {
  const INITIAL_VALUES = {
    email: '',
    password: ''
  };
  const validateForm = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    signIn(values, history);
    setSubmitting(false);
    resetForm(INITIAL_VALUES);
  };

  return (
    <div className="signin">
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="signin__form">
            <h3 className="signin__heading">Sign In:</h3>
            <Field
              type="email"
              name="email"
              className="signin__input"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="signin__warning"
            />
            <Field
              type="password"
              name="password"
              className="signin__input"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="signin__warning"
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Sign In
            </CustomButton>
            {errors.signin && (
              <p className="signin__warning">{errors.signin}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => {
  return { errors: state.user.errors };
};

export default withRouter(connect(mapStateToProps, { signIn })(Signin));
