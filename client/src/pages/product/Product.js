import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct, setLoading } from '../../redux/shop/shop.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';

import CustomButton from '../../components/customButton/CustomButton';

import './product.scss';

const Product = ({
  match,
  isLoading,
  setLoading,
  getSingleProduct,
  product,
  addItemToCart
}) => {
  useEffect(() => {
    setLoading();
    getSingleProduct(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (isLoading || !product) {
    return <div>Loading product...</div>;
  }

  const {
    brand,
    category,
    gender,
    imageMain,
    imageSecondary,
    model,
    price,
    sizes
  } = product;

  const handleClick = () => {
    addItemToCart(product);
  };
  const categoryTags = category
    .map(item => (
      <span className="product__category" key={item}>
        {item}
      </span>
    ))
    .join(' ');
  const sizesRadios = sizes.split(' ').map(item => (
    <>
      <input type="radio" name="size" value={item} id={item} key={item} />
      <label htmlFor={item}>{item}</label>
    </>
  ));

  return (
    <div className="product">
      <div className="product__images">
        <img src={imageMain.url} alt="Sneakers" className="product__image" />
        <img
          src={imageSecondary.url}
          alt="Sneakers"
          className="product__image"
        />
      </div>
      <h3 className="product__brand">{brand}</h3>
      <h4 className="product__model">{model}</h4>
      <h5 className="product__gender">For: {gender}</h5>
      <p className="product__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum
        pariatur officia blanditiis dolore inventore distinctio, reiciendis quae
        magnam aliquam dolorem quia est architecto earum odit aperiam cum aut
        cupiditate! Nisi voluptatem reiciendis fugit odio sed vitae, nulla vel
        quas.
        <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Inventore repellat nobis placeat est repellendus. Corrupti quasi eos
        autem laborum fugiat id accusantium quibusdam voluptatibus odio in ab
        harum, facilis obcaecati quia doloribus modi maxime sit itaque animi,
        sequi qui!
        <br /> Ducimus neque harum totam quisquam nobis deleniti modi earum
        corporis. Eum ex iure delectus expedita? Libero vel nihil aliquam
        veritatis amet.
      </p>
      <div className="product__categories">{categoryTags}</div>
      <p className="price">{price}</p>
      <div className="product__sizes">{sizesRadios}</div>
      <CustomButton onClick={handleClick}>Add to Cart</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.shop.isLoading,
    product: state.shop.currentProduct
  };
};

export default connect(mapStateToProps, {
  setLoading,
  getSingleProduct,
  addItemToCart
})(Product);
