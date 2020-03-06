import React from 'react';

import './cart-item.scss';

const CartItem = ({ item: { imageMain, model, brand, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageMain.url} alt="Sneaker" className="cart-item__img" />

      <div className="cart-item__brand">{brand}</div>
      <div className="cart-item__model">{model}</div>
      <div className="cart-item__quantity">{quantity}</div>
    </div>
  );
};

export default CartItem;
