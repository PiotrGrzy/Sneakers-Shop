import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomButton from '../customButton/CustomButton';

import './signup.scss';

const Signup = () => {
  return (
    <div className="signup">
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          city: '',
          street: '',
          zipCode: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
            <ErrorMessage name="firstName" component="div" />
            <Field
              type="text"
              name="lastName"
              className="signup__input"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName" component="div" />
            <Field
              type="text"
              name="city"
              className="signup__input"
              placeholder="City"
            />
            <ErrorMessage name="city" component="div" />
            <Field
              type="text"
              name="street"
              className="signup__input"
              placeholder="Street"
            />
            <ErrorMessage name="street" component="div" />
            <Field
              type="email"
              name="email"
              className="signup__input"
              placeholder="Email Address"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              className="signup__input"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <Field
              type="password"
              name="confirmPassword"
              className="signup__input"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="confirmPassword" component="div" />
            <CustomButton type="submit" disabled={isSubmitting}>
              Sign Up
            </CustomButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
