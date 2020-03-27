import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomButton from '../../components/customButton/CustomButton';
import OrderItem from '../../components/orderItem/OrderItem';
import PayPal from '../../components/paypal/PayPal';

import './order.scss';

const Order = ({ user, cartItems }) => {
  const {
    id,
    email,
    firstName,
    lastName,
    address: { city, street, postalCode }
  } = user.user;

  const INITIAL_VALUES = {
    email,
    firstName,
    lastName,
    city,
    street,
    postalCode
  };

  const validateForm = values => {
    const errors = {};

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

  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const orderDescription =
    cartItems.length > 1
      ? `You are buying ${cartItems.length} items.`
      : `You are buying ${cartItems[0].brand} ${cartItems[0].model}`;

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };
  return (
    <div className="order">
      <div className="order__user-data">
        <Formik
          initialValues={INITIAL_VALUES}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="signup__form">
              <h3 className="signup__heading">Delivery info:</h3>
              <Field
                type="text"
                name="firstName"
                className="signup__input"
                disabled
              />

              <Field
                type="text"
                name="lastName"
                className="signup__input"
                disabled
              />

              <Field
                type="email"
                name="email"
                className="signup__input"
                disabled
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
            </Form>
          )}
        </Formik>
      </div>
      <div className="order__cart-data">
        <h3 className="signup__heading">Your order:</h3>
        {cartItems.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <PayPal
        order={{
          price: totalPrice,
          description: orderDescription,
          name: 'Nike Sneakers Super cool'
        }}
        user={(id, email, firstName, lastName, city, street, postalCode)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps)(Order);
