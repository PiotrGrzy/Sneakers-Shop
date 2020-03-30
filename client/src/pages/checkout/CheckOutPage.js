import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
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
        <Link to={cartItems.length < 1 ? '/' : '/order'}>
          <CustomButton>Order</CustomButton>
        </Link>

        <div className="checkout__total">Total: {totalPrice} $</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CheckOutPage);
