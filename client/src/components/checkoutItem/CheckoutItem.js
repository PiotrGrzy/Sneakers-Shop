import React from 'react';
import { connect } from 'react-redux';
import {
  addItemToCart,
  decrementItem,
  removeItemFromCart
} from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = ({
  item,
  addItemToCart,
  decrementItem,
  removeItemFromCart
}) => {
  const { imageMain, model, brand, quantity, price, size } = item;

  return (
    <div className="checkout-item">
      <img src={imageMain.url} alt="Sneaker" className="checkout-item__img" />
      <div className="checkout-item__brand">{brand}</div>
      <div className="checkout-item__model">{model}</div>
      <div className="checkout-item__size">{size}</div>
      <div className="checkout-item__minus" onClick={() => decrementItem(item)}>
        &#10094;
      </div>
      <div className="checkout-item__quantity">{quantity}</div>
      <div className="checkout-item__plus" onClick={() => addItemToCart(item)}>
        &#10095;
      </div>
      <div className="checkout-item__price">{price} $</div>
      <div
        className="checkout-item__delete"
        onClick={() => removeItemFromCart(item)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, {
  addItemToCart,
  decrementItem,
  removeItemFromCart
})(CheckoutItem);
