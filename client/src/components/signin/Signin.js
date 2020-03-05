import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomButton from '../customButton/CustomButton';

import './signin.scss';

const Signin = () => {
  return (
    <div className="signin">
      <Formik
        initialValues={{ email: '', password: '' }}
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
          <Form className="signin__form">
            <h3 className="signin__heading">Sign In:</h3>
            <Field type="email" name="email" className="signin__input" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" className="signin__input" />
            <ErrorMessage name="password" component="div" />
            <CustomButton type="submit" disabled={isSubmitting}>
              Sign In
            </CustomButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
