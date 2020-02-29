import React from 'react';
import { Link } from 'react-router-dom';

import './sneaker-li.scss';

const SneakerLi = ({
  sneaker: {
    id,
    price,
    imageMain: { url },
    model,
    brand
  }
}) => {
  return (
    <div className="sneaker-li">
      <Link to={`sneakers/${id}`}>
        <img src={url} alt="Sneaker" className="sneaker-li__image" />
        <d className="sneaker-li__data">
          <p className="sneaker-li__brand">{brand}</p>
          <p className="sneaker-li__model">{model}</p>
          <span className="sneaker-li__price">{price} $</span>
        </d>
        <span className="sneaker-li__fav">
          <i className="lni lni-heart"></i>
        </span>
      </Link>
    </div>
  );
};

export default SneakerLi;
