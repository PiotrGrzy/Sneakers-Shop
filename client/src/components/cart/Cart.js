import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import CustomButton from '../customButton/CustomButton';

import './cart.scss';

const Cart = ({ cartItems, isOpen }) => {
  if (cartItems.length === 0)
    return (
      <div className={isOpen ? 'cart' : 'cart hidden'}>Cart is empty...</div>
    );
  return (
    <div className={isOpen ? 'cart' : 'cart hidden'}>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <Link to="/checkout">
        <CustomButton>CheckOut</CustomButton>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: state.cart.items, isOpen: state.cart.isOpen };
};

export default connect(mapStateToProps)(Cart);
