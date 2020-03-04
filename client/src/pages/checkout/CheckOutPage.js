import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

import './checkout.scss';

const CheckOutPage = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  return (
    <div className="checkout">
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="checkout__total">Total: {totalPrice} $</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: state.cart.items };
};

export default connect(mapStateToProps)(CheckOutPage);
