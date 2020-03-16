import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { getSingleProduct, setLoading } from '../../redux/shop/shop.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../../components/customButton/CustomButton';
import Spinner from '../../components/spinner/Spinner';
import './product.scss';

const _ = require('lodash');

const Product = ({
  history,
  match,
  isLoading,
  setLoading,
  getSingleProduct,
  product,
  addItemToCart
}) => {
  const [size, setSize] = useState('');

  useEffect(() => {
    setLoading();
    getSingleProduct(match.params.id);

    // eslint-disable-next-line
  }, []);

  if (isLoading || !product) {
    return (
      <div>
        <Spinner />
      </div>
    );
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
    if (!size) {
      Swal.fire({
        title: `Pick up your size before adding to cart`,
        icon: 'info'
      });
      return;
    }
    product.size = size;
    const newProduct = _.cloneDeep(product);
    newProduct.id = `${product.id}_${product.size}`;
    addItemToCart(newProduct);
    history.push('/');
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: 'success',
      title: 'New Item added to Cart'
    });
  };
  const categoryTags = category.map(item => (
    <span className="product__category" key={item}>
      {item}
    </span>
  ));

  const sizesRadios = sizes.split(' ').map((item, i) => (
    <label key={item} className="product__sizes-container">
      {item}
      <input
        className="product__sizes-input"
        name="sizes"
        type="radio"
        value={item}
        onChange={() => setSize(item)}
      />
      <span className="product__sizes-checkmark"></span>
    </label>
  ));

  const genderStyle = {
    color: '#f5b0bb'
  };
  if (gender === 'Men') genderStyle.color = '#b0d4f5';
  if (gender === 'Kids') genderStyle.color = '#c6f5b0';

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
      <div className="product__info-wrapper">
        <div>
          <h3 className="product__brand">{brand}</h3>
          <h4 className="product__model">{model}</h4>
          <h5 className="product__gender" style={genderStyle}>
            {gender}
          </h5>
        </div>
        <div className="product__categories">{categoryTags}</div>
        <p className="product__price">{price} $</p>
      </div>
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

      <div className="product__sizes">
        <p>Pick up your size:</p>
        <div className="product__sizes-radios">{sizesRadios}</div>
      </div>
      <div className="product__links">
        <p className="product__link-back" onClick={() => history.push('/')}>
          <i className="lni lni-arrow-left"></i> Back
        </p>
        <CustomButton onClick={handleClick}>Add to Cart</CustomButton>
      </div>
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
