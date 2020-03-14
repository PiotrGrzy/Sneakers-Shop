import React from 'react';

import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import CustomButton from '../../components/customButton/CustomButton';

import './checkout.scss';

const CheckOutPage = ({ cartItems, history }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  return (
    <div className="checkout">
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="checkout__bottom-wrapper">
        <p className="product__link-back" onClick={() => history.push('/')}>
          <i className="lni lni-arrow-left"></i> Continue Shopping
        </p>
        <CustomButton>Order</CustomButton>
        <div className="checkout__total">Total: {totalPrice} $</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: state.cart.items };
};

export default connect(mapStateToProps)(CheckOutPage);
