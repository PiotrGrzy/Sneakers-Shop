import React from 'react';

import './order-item.scss';

const OrderItem = ({ item }) => {
  const { brand, model, quantity, price } = item;
  return (
    <div className="order-item">
      <span className="order-item__brand">{brand}</span>
      <span className="order-item__model">{model}</span>
      <span className="order-item__quantity">{quantity}</span>
      <span className="order-item__price">{price}</span>
    </div>
  );
};

export default OrderItem;
