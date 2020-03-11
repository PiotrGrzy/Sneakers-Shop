import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/user/user.actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router';
import CustomButton from '../customButton/CustomButton';

import './signup.scss';

const Signup = ({ signUp, errors, history }) => {
  const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    postalCode: ''
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
    } else if (values.password.length < 6) {
      errors.password = 'Password must min 6 characters long';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!values.firstName) {
      errors.firstName = 'Firstname is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Lastname is required';
    }
    if (!values.city) {
      errors.city = 'City is required';
    }
    if (!values.street) {
      errors.street = 'Street is required';
    }
    if (!values.postalCode) {
      errors.postalCode = 'Zip Code is required';
    } else if (/(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/.test(values.postalCode)) {
      errors.postalCode = 'Invalid Zip Code';
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    signUp(values, history);
    setSubmitting(false);
    resetForm(INITIAL_VALUES);
  };

  return (
    <div className="signup">
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="signup__form">
            <h3 className="signup__heading">Sign Up:</h3>
            <Field
              type="text"
              name="firstName"
              className="signup__input"
              placeholder="First Name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="signup__warning"
            />
            <Field
              type="text"
              name="lastName"
              className="signup__input"
              placeholder="Last Name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="signup__warning"
            />
            <Field
              type="text"
              name="city"
              className="signup__input"
              placeholder="City"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="signup__warning"
            />
            <Field
              type="text"
              name="street"
              className="signup__input"
              placeholder="Street"
            />
            <ErrorMessage
              name="street"
              component="div"
              className="signup__warning"
            />
            <Field
              type="text"
              name="postalCode"
              className="signup__input"
              placeholder="Zip Code"
            />
            <ErrorMessage
              name="postalCode"
              component="div"
              className="signup__warning"
            />
            <Field
              type="email"
              name="email"
              className="signup__input"
              placeholder="Email Address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="signup__warning"
            />
            <Field
              type="password"
              name="password"
              className="signup__input"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="signup__warning"
            />
            <Field
              type="password"
              name="confirmPassword"
              className="signup__input"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="signup__warning"
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Sign Up
            </CustomButton>
            {errors.signup && (
              <p className="signup__warning">{errors.signup}</p>
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

export default withRouter(connect(mapStateToProps, { signUp })(Signup));
